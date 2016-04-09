package main

import (
	"fmt"
	"os"
	"sync"

	"github.com/lxc/lxd"
	"github.com/lxc/lxd/shared"
)

func cmdDestroy(c *lxd.Client, args []string) error {
	var wgBatch sync.WaitGroup

	if os.Getuid() != 0 {
		return fmt.Errorf("Container destruction must be run as root.")
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

	// Load the LXD container list
	containers, err := c.ListContainers()
	if err != nil {
		return err
	}

	containersMap := map[string]shared.ContainerInfo{}
	for _, ctn := range containers {
		containersMap[ctn.Name] = ctn
	}

	// Helper function
	deleteContainer := func(name string) {
		defer wgBatch.Done()

		ct, ok := containersMap[name]
		if !ok {
			logf("Failed to delete container: %s: Doesn't exist", ct.Name)
			return
		}

		// Stop
		if ct.IsActive() {
			resp, err := c.Action(ct.Name, "stop", -1, true, false)
			if err != nil {
				logf("Failed to delete container: %s: %s", ct.Name, err)
				return
			}

			err = c.WaitForSuccess(resp.Operation)
			if err != nil {
				logf("Failed to delete container: %s: %s", ct.Name, err)
				return
			}
		}

		// Delete
		resp, err := c.Delete(ct.Name)
		if err != nil {
			logf("Failed to delete container: %s: %s", ct.Name, err)
			return
		}

		err = c.WaitForSuccess(resp.Operation)
		if err != nil {
			logf("Failed to delete container: %s: %s", ct.Name, err)
			return
		}
	}

	// Delete all the containers
	batch := 8
	batches := len(routers) / batch
	remainder := len(routers) % batch

	current := 0
	for i := 0; i < batches; i++ {
		for j := 0; j < batch; j++ {
			wgBatch.Add(1)
			go deleteContainer(routers[current].Name)
			current += 1
		}
		wgBatch.Wait()
	}

	for k := 0; k < remainder; k++ {
		wgBatch.Add(1)
		go deleteContainer(routers[current].Name)
		current += 1
	}
	wgBatch.Wait()

	// Destroy all the interfaces
	err = networkDestroy(routersMap)
	if err != nil {
		return err
	}

	return nil
}
