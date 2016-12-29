package main

import (
	"flag"
	"fmt"
	"strings"
	"sync"

	"github.com/lxc/lxd"
)

var argAutoStart = flag.Bool("auto-start", false, "Start the simulation at boot time")

func cmdCreate(c *lxd.Client, args []string) error {
	var wgBatch sync.WaitGroup

	// A path must be provided
	if len(args) < 1 {
		return fmt.Errorf("A path must be passed to create.")
	}

	// Load the simulation
	routersMap, err := importFromCSV(args[0])
	if err != nil {
		return err
	}

	routers := []*Router{}
	for _, v := range routersMap {
		if v.Tier < 1 {
			continue
		}

		routers = append(routers, v)
	}

	// Clear any existing images
	fp := c.GetAlias("internet-router")
	if fp != "" {
		logf("Deleting the existing router image: %s", fp)
		err = c.DeleteImage(fp)
		if err != nil {
			return err
		}
	}

	// Load the image
	logf("Importing the router image")
	_, err = c.PostImage("image/image-meta.tar.xz", "image/image-rootfs.tar.xz", nil, false, []string{"internet-router"}, nil)
	if err != nil {
		return err
	}
	logf("New router image imported: %s", fp)

	// Create the profile
	_, err = c.ProfileConfig("internet-base")
	if err != nil {
		logf("Creating the profile")
		err := c.ProfileCreate("internet-base")
		if err != nil {
			return err
		}
	}

	// Helper function
	createContainer := func(router *Router) {
		defer wgBatch.Done()

		var interfaces string
		var bgpd string

		// Configuration
		config := map[string]string{}
		devices := map[string]map[string]string{}

		config["user.internet.type"] = "router"
		config["user.internet.organization"] = router.Organization
		config["user.internet.priority"] = fmt.Sprintf("%d", router.Priority)
		config["user.internet.tier"] = fmt.Sprintf("%d", router.Tier)
		config["user.internet.location"] = router.Location

		for i, r := range router.DNS {
			config[fmt.Sprintf("user.internet.dns.%d", i)] = r
		}

		config["user.internet.router.fqdn"] = router.Configuration.FQDN
		config["user.internet.router.asn"] = fmt.Sprintf("%d", router.Configuration.ASN)
		config["user.internet.router.password.login"] = router.Configuration.PasswordLogin
		config["user.internet.router.password.enable"] = router.Configuration.PasswordEnable
		if router.Configuration.RouterID != nil {
			config["user.internet.router.routerid"] = router.Configuration.RouterID.String()
		}

		if router.Internal {
			config["user.internet.internal"] = "true"
		} else {
			config["user.internet.internal"] = "false"
		}

		if router.Tier >= 1 && router.Tier <= 3 {
			interfaces = fmt.Sprintf(`auto lo
iface lo inet loopback
    pre-up echo 0 > /proc/sys/net/ipv6/conf/all/accept_dad || true
    post-up echo 1 > /proc/sys/net/ipv6/conf/all/forwarding || true

auto local
iface local inet6 manual
    pre-up ip link add local type dummy || true
    pre-up ip link set local up || true
`)
		}

		for i, r := range router.Configuration.Loopback.Addresses {
			config[fmt.Sprintf("user.internet.router.loopback.address.%d", i)] = r.String()
			if router.Tier >= 1 && router.Tier <= 3 {
				interfaces += fmt.Sprintf("    post-up ip -6 addr add dev local %s/128 || true\n", r.String())
			}
		}

		for i, r := range router.Configuration.Loopback.Routes {
			config[fmt.Sprintf("user.internet.router.loopback.route.%d.subnet", i)] = r.Subnet.String()
			if router.Tier >= 1 && router.Tier <= 3 {
				interfaces += fmt.Sprintf("    post-up sleep 10 ; ip -6 route add dev local %s || true\n", r.Subnet.String())
			}
		}

		if router.Tier >= 1 && router.Tier <= 3 {
			bgpd = fmt.Sprintf(fmt.Sprintf(`hostname %s
password %s
enable password %s

router bgp %d
 bgp router-id %s
 no bgp default ipv4-unicast
`, router.Name, router.Configuration.PasswordLogin, router.Configuration.PasswordEnable, router.Configuration.ASN, router.Configuration.RouterID.String()))
		}

		if router.Peers != nil {
			for _, p := range router.Peers {
				if strings.HasPrefix(p.Interface, "v") {
					device := map[string]string{
						"type":    "nic",
						"nictype": "physical",
						"name":    p.Interface,
						"parent":  p.Interface,
						"hwaddr":  p.MAC,
					}
					devices[p.Interface] = device
				} else if strings.HasPrefix(p.Interface, "br") {
					device := map[string]string{
						"type":    "nic",
						"nictype": "bridged",
						"name":    p.Interface,
						"parent":  p.Interface,
						"hwaddr":  p.MAC,
					}
					devices[p.Interface] = device
				} else {
					logf("Failed to configure container '%s': Bad interface name: %s", router.Name, p.Interface)
					return
				}

				if router.Tier >= 1 && router.Tier <= 3 {
					interfaces += fmt.Sprintf(`
auto %s
iface %s inet6 manual
    post-up tc qdisc add dev %s root netem delay %dms || true
    post-up tc qdisc add dev %s root netem rate %dmbit || true
`, p.Interface, p.Interface, p.Interface, p.Delay, p.Interface, p.Speed)

					if p.ASN != 0 {
						bgpd += fmt.Sprintf(`
 neighbor %s remote-as %d
 neighbor %s weight %d
 neighbor %s interface %s

`, p.Remote, p.ASN, p.Remote, p.Weight, p.Remote, p.Interface)
					}
				}

				config[fmt.Sprintf("user.internet.peer.%s.interface", p.Name)] = p.Interface
				config[fmt.Sprintf("user.internet.peer.%s.mac", p.Name)] = p.MAC
				config[fmt.Sprintf("user.internet.peer.%s.remote", p.Name)] = p.Remote
				config[fmt.Sprintf("user.internet.peer.%s.speed", p.Name)] = fmt.Sprintf("%d", p.Speed)
				config[fmt.Sprintf("user.internet.peer.%s.delay", p.Name)] = fmt.Sprintf("%d", p.Delay)
				config[fmt.Sprintf("user.internet.peer.%s.asn", p.Name)] = fmt.Sprintf("%d", p.ASN)
				config[fmt.Sprintf("user.internet.peer.%s.weight", p.Name)] = fmt.Sprintf("%d", p.Weight)

				if p.Routes != nil {
					for i, r := range p.Routes {
						config[fmt.Sprintf("user.internet.peer.%s.route.%d.subnet", p.Name, i)] = r.Subnet.String()
						if r.Gateway != nil {
							config[fmt.Sprintf("user.internet.peer.%s.route.%d.gateway", p.Name, i)] = r.Gateway.String()
							if router.Tier >= 1 && router.Tier <= 3 {
								interfaces += fmt.Sprintf("    post-up sleep 10 ; ip -6 route add dev %s %s via %s || true\n", p.Interface, r.Subnet.String(), r.Gateway.String())
							}
						} else {
							if router.Tier >= 1 && router.Tier <= 3 {
								interfaces += fmt.Sprintf("    post-up sleep 10 ; ip -6 route add dev %s %s via %s || true\n", p.Interface, r.Subnet.String(), p.Remote)
							}
						}
					}
				}
			}
		}

		if router.Tier >= 1 && router.Tier <= 3 {
			bgpd += " address-family ipv6\n"

			if router.Peers != nil {
				for _, p := range router.Peers {
					if p.ASN != 0 {
						bgpd += fmt.Sprintf("  neighbor %s activate\n", p.Remote)
					}
				}
			}

			bgpd += `  redistribute connected
  redistribute kernel
 exit-address-family
`

			config["user.internet.config.interfaces"] = interfaces
			config["user.internet.config.bgpd"] = bgpd
		}

		// Config-only containers
		if router.Tier > 3 {
			ct, err := c.ContainerInfo(router.Name)
			if err != nil {
				logf("Failed to configure container '%s': %s", router.Name, err)
				return
			}

			for k, _ := range ct.Config {
				if strings.HasPrefix(k, "user.internet.") {
					delete(ct.Config, k)
				}
			}

			for k, v := range config {
				ct.Config[k] = v
			}

			err = c.UpdateContainerConfig(router.Name, ct.Writable())
			if err != nil {
				logf("Failed to configure container '%s': %s", router.Name, err)
				return
			}

			return
		}

		// Create the container
		resp, err := c.Init(router.Name, "local", "internet-router", &[]string{"internet-base"}, config, nil, false)
		if err != nil {
			logf("Failed to create container '%s': %s", router.Name, err)
			return
		}

		err = c.WaitForSuccess(resp.Operation)
		if err != nil {
			logf("Failed to create container '%s': %s", router.Name, err)
			return
		}

		// Setup the devices
		ct, err := c.ContainerInfo(router.Name)
		if err != nil {
			logf("Failed to configure container '%s': %s", router.Name, err)
			return
		}

		for k, v := range devices {
			ct.Devices[k] = v
		}

		err = c.UpdateContainerConfig(router.Name, ct.Writable())
		if err != nil {
			logf("Failed to configure container '%s': %s", router.Name, err)
			return
		}
	}

	// Create the containers
	batch := 8
	batches := len(routers) / batch
	remainder := len(routers) % batch

	logf("Creating the containers")
	current := 0
	for i := 0; i < batches; i++ {
		for j := 0; j < batch; j++ {
			wgBatch.Add(1)
			go createContainer(routers[current])
			current += 1
		}
		wgBatch.Wait()
	}

	for k := 0; k < remainder; k++ {
		wgBatch.Add(1)
		go createContainer(routers[current])
		current += 1
	}
	wgBatch.Wait()
	logf("%d containers created", len(routers))

	return nil
}
