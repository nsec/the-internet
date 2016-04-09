package main

import (
	"fmt"

	"github.com/lxc/lxd"
)

func cmdStatus(c *lxd.Client, args []string) error {
	// Load the simulation
	routers, err := importFromLXD(c)
	if err != nil {
		return err
	}

	fmt.Printf("Number of routers: %d\n", len(routers))

	return nil
}
