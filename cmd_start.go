package main

import (
	"fmt"
	"os"
	"sync"

	"github.com/lxc/lxd/client"
	"github.com/lxc/lxd/shared/api"
)

func cmdStart(c lxd.ContainerServer, args []string) error {
	var wgBatch sync.WaitGroup

	if os.Getuid() != 0 {
		return fmt.Errorf("Container startup must be run as root.")
	}

	// Load the simulation
	routersMap, err := importFromLXD(c)
	if err != nil {
		return err
	}

	routers := []*Router{}
	for _, v := range routersMap {
		if v.Tier < 1 || v.Tier > 3 {
			continue
		}

		routers = append(routers, v)
	}

	// Create all the needed interfaces
	logf("Creating the network interfaces")
	err = networkCreate(routersMap)
	if err != nil {
		return err
	}

	// Helper function
	startContainer := func(name string) {
		defer wgBatch.Done()

		req := api.ContainerStatePut{
			Action:  "start",
			Timeout: -1,
		}

		op, err := c.UpdateContainerState(name, req, "")
		if err != nil {
			logf("Failed to start container: %s: %s", name, err)
			return
		}

		err = op.Wait()
		if err != nil {
			logf("Failed to start container: %s: %s", name, err)
			return
		}
	}

	// Start the containers
	batch := 8
	batches := len(routers) / batch
	remainder := len(routers) % batch

	logf("Starting the containers")
	current := 0
	for i := 0; i < batches; i++ {
		for j := 0; j < batch; j++ {
			wgBatch.Add(1)
			go startContainer(routers[current].Name)
			current += 1
		}
		wgBatch.Wait()
	}

	for k := 0; k < remainder; k++ {
		wgBatch.Add(1)
		go startContainer(routers[current].Name)
		current += 1
	}
	wgBatch.Wait()
	logf("%d containers started", len(routers))

	return nil
}
