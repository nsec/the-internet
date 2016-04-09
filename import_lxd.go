package main

import (
	"fmt"
	"net"
	"strconv"
	"strings"

	"github.com/lxc/lxd"
)

func importFromLXD(c *lxd.Client) (Routers, error) {
	// Load the LXD container list
	containers, err := c.ListContainers()
	if err != nil {
		return nil, err
	}

	// Build the routers map
	routers := Routers{}
	for _, ctn := range containers {
		// Skip the container we don't care about
		if ctn.ExpandedConfig["user.internet.type"] != "router" {
			continue
		}

		config := ctn.ExpandedConfig

		// Generate the new record
		router := Router{}
		router.Configuration = &RouterConfiguration{}

		// Text fields
		router.Organization = config["user.internet.organization"]
		router.Name = ctn.Name
		router.Location = config["user.internet.location"]

		router.Configuration.PasswordLogin = config["user.internet.router.password.login"]
		router.Configuration.PasswordEnable = config["user.internet.router.password.enable"]
		router.Configuration.FQDN = config["user.internet.router.fqdn"]

		routerid := net.ParseIP(config["user.internet.router.routerid"])
		router.Configuration.RouterID = &routerid

		// Integers
		tier, err := strconv.Atoi(config["user.internet.tier"])
		if err != nil {
			return nil, fmt.Errorf("Invalid tier: %s\n", config["user.internet.tier"])
		}
		router.Tier = tier

		asn, err := strconv.Atoi(config["user.internet.router.asn"])
		if err != nil {
			return nil, fmt.Errorf("Invalid ASN: %s\n", config["user.internet.router.asn"])
		}
		router.Configuration.ASN = asn

		priority, err := strconv.Atoi(config["user.internet.priority"])
		if err != nil {
			return nil, fmt.Errorf("Invalid priority: %s\n", config["user.internet.priority"])
		}
		router.Priority = priority

		// Booleans
		if config["user.internet.internal"] == "true" {
			router.Internal = true
		}

		// DNS
		dns := []string{}
		for k, v := range config {
			if !strings.HasPrefix(k, "user.internet.dns.") {
				continue
			}

			dns = append(dns, v)
		}
		router.DNS = dns

		// Loopback
		addresses := []net.IP{}
		routes := []RouterInterfaceRoute{}
		for k, v := range config {
			if strings.HasPrefix(k, "user.internet.router.loopback.address.") {
				addresses = append(addresses, net.ParseIP(v))
				continue
			}

			if strings.HasPrefix(k, "user.internet.router.loopback.route.") {
				_, subnet, err := net.ParseCIDR(v)
				if err != nil {
					return nil, err
				}

				routes = append(routes, RouterInterfaceRoute{Subnet: subnet})
				continue
			}
		}

		// Peers
		peersMap := map[string]*Peer{}

		for k, v := range config {
			if !strings.HasPrefix(k, "user.internet.peer.") {
				continue
			}

			fields := strings.Split(k, ".")
			name := fields[3]
			key := fields[4]

			peer, ok := peersMap[name]
			if !ok {
				peer = &Peer{Name: name}
			}

			switch key {
			case "interface":
				peer.Interface = v
			case "mac":
				peer.MAC = v
			case "remote":
				peer.Remote = v
			case "speed":
				speed, err := strconv.Atoi(v)
				if err != nil {
					return nil, err
				}

				peer.Speed = speed
			case "delay":
				delay, err := strconv.Atoi(v)
				if err != nil {
					return nil, err
				}

				peer.Delay = delay
			case "asn":
				asn, err := strconv.Atoi(v)
				if err != nil {
					return nil, err
				}

				peer.ASN = asn
			case "weight":
				weight, err := strconv.Atoi(v)
				if err != nil {
					return nil, err
				}

				peer.Weight = weight
			}

			peersMap[name] = peer
		}

		peers := []Peer{}

		for _, p := range peersMap {
			i := 0

			routes := []RouterInterfaceRoute{}
			for {
				found := false
				route := RouterInterfaceRoute{}

				v, ok := config[fmt.Sprintf("user.internet.peer.%s.route.%d.subnet", p.Name, i)]
				if ok {
					found = true
					_, subnet, err := net.ParseCIDR(v)
					if err != nil {
						return nil, err
					}

					route.Subnet = subnet
				}

				v, ok = config[fmt.Sprintf("user.internet.peer.%s.route.%d.gateway", p.Name, i)]
				if ok {
					found = true
					gateway := net.ParseIP(v)
					route.Gateway = &gateway
				}

				if !found {
					break
				}

				i += 1

				routes = append(routes, route)
			}

			p.Routes = routes

			peers = append(peers, *p)
		}

		router.Peers = peers
		routers[router.Name] = &router
	}

	return routers, nil
}
