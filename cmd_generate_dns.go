package main

import (
	"fmt"
	"strings"

	"github.com/lxc/lxd/client"
	"github.com/lxc/lxd/shared"
)

func cmdGenerateDNS(c lxd.ContainerServer, args []string) error {
	// A path must be provided
	if len(args) < 1 {
		return fmt.Errorf("A format must be provided (samba4 or bind9).")
	}

	format := args[0]
	if !shared.StringInSlice(format, []string{"samba4", "bind9"}) {
		return fmt.Errorf("Invalid format, supported values are samba4 or bind9")
	}

	// Load the simulation
	routers, err := importFromLXD(c)
	if err != nil {
		return err
	}

	for _, r := range routers {
		for _, d := range r.DNS {
			if format == "bind9" {
				fmt.Println(d)
			} else {
				fields := strings.Fields(d)
				domain := strings.Split(fields[0], ".")

				fmt.Printf("samba-tool dns add localhost %s %s %s %s\n", domain[len(domain)-1], fields[0], fields[2], fields[3])
			}
		}
	}

	return nil
}
