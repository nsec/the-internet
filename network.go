package main

import (
	"fmt"
	"os/exec"
	"strings"

	"github.com/lxc/lxd/shared"
)

func networkInterfaces(routers Routers) ([]string, []string, error) {
	vethInterfaces := []string{}
	bridgeInterfaces := []string{}

	for _, r := range routers {
		for _, p := range r.Peers {
			if strings.HasPrefix(p.Interface, "v") {
				veth := strings.TrimSuffix(strings.TrimSuffix(p.Interface, "-1"), "-2")

				if !shared.StringInSlice(veth, vethInterfaces) {
					vethInterfaces = append(vethInterfaces, veth)
				}
			} else if strings.HasPrefix(p.Interface, "br") {
				if !shared.StringInSlice(p.Interface, bridgeInterfaces) {
					bridgeInterfaces = append(bridgeInterfaces, p.Interface)
				}
			} else {
				return nil, nil, fmt.Errorf("Invalid interface name: %s", p.Interface)
			}
		}
	}

	return vethInterfaces, bridgeInterfaces, nil
}

func networkCreate(routers Routers) error {
	vethInterfaces, bridgeInterfaces, err := networkInterfaces(routers)
	if err != nil {
		return err
	}

	for _, veth := range vethInterfaces {
		if !shared.PathExists(fmt.Sprintf("/sys/class/net/%s-1", veth)) && !shared.PathExists(fmt.Sprintf("/sys/class/net/%s-2", veth)) {
			out, err := exec.Command("ip", "link", "add", "dev", fmt.Sprintf("%s-1", veth), "type", "veth", "peer", "name", fmt.Sprintf("%s-2", veth)).CombinedOutput()
			if err != nil {
				return fmt.Errorf("Failed to create veth device: %s", out)
			}
		}

		if shared.PathExists(fmt.Sprintf("/sys/class/net/%s-1", veth)) {
			out, err := exec.Command("ip", "link", "set", "dev", fmt.Sprintf("%s-1", veth), "up").CombinedOutput()
			if err != nil {
				return fmt.Errorf("Failed to bring veth device up: %s", out)
			}
		}

		if shared.PathExists(fmt.Sprintf("/sys/class/net/%s-2", veth)) {
			out, err := exec.Command("ip", "link", "set", "dev", fmt.Sprintf("%s-2", veth), "up").CombinedOutput()
			if err != nil {
				return fmt.Errorf("Failed to bring veth device up: %s", out)
			}
		}
	}

	for _, bridge := range bridgeInterfaces {
		if !shared.PathExists(fmt.Sprintf("/sys/class/net/%s", bridge)) {
			out, err := exec.Command("ip", "link", "add", "dev", bridge, "type", "bridge").CombinedOutput()
			if err != nil {
				return fmt.Errorf("Failed to create bridge device: %s", out)
			}
		}

		out, err := exec.Command("ip", "link", "set", "dev", bridge, "up").CombinedOutput()
		if err != nil {
			return fmt.Errorf("Failed to bring bridge device up: %s", out)
		}
	}

	return nil
}

func networkDestroy(routers Routers) error {
	vethInterfaces, _, err := networkInterfaces(routers)
	if err != nil {
		return err
	}

	for _, veth := range vethInterfaces {
		if shared.PathExists(fmt.Sprintf("/sys/class/net/%s-1", veth)) {
			out, err := exec.Command("ip", "link", "del", "dev", fmt.Sprintf("%s-1", veth)).CombinedOutput()
			if err != nil {
				return fmt.Errorf("Failed to delete veth device up: %s", out)
			}
		}

		if shared.PathExists(fmt.Sprintf("/sys/class/net/%s-2", veth)) {
			out, err := exec.Command("ip", "link", "del", "dev", fmt.Sprintf("%s-2", veth)).CombinedOutput()
			if err != nil {
				return fmt.Errorf("Failed to delete veth device up: %s", out)
			}
		}
	}

	return nil
}
