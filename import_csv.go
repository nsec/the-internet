package main

import (
	"encoding/csv"
	"fmt"
	"io"
	"math/rand"
	"net"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/lxc/lxd/shared"
)

func parseCSV(path string) ([][]string, error) {
	records := [][]string{}

	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}

	r := csv.NewReader(file)
	header := true
	for {
		record, err := r.Read()
		if err == io.EOF {
			break
		} else if err != nil {
			return nil, err
		}

		if header {
			header = false
			continue
		}

		records = append(records, record)
	}

	return records, nil
}

func importFromCSV(path string) (Routers, error) {
	routers := Routers{}

	if !shared.PathExists(path) {
		return nil, fmt.Errorf("Path doesn't exist.")
	}

	// Import "Telco.csv"
	records, err := parseCSV(filepath.Join(path, "Telco.csv"))
	if err != nil {
		return nil, err
	}

	for _, record := range records {
		if len(record) < 9 {
			return nil, fmt.Errorf("Invalid record: %s\n", record)
		}

		// Look for duplicates
		_, ok := routers[record[2]]
		if ok {
			return nil, fmt.Errorf("Duplicate record for: %s\n", record[2])
		}

		// Generate the router record
		router := Router{}
		router.Configuration = &RouterConfiguration{}

		// Text fields
		router.Organization = record[0]
		router.Configuration.FQDN = record[1]
		router.Name = record[2]
		router.Location = record[7]

		// Integers
		tier, err := strconv.Atoi(record[3])
		if err != nil {
			return nil, fmt.Errorf("Invalid tier in: %s\n", record)
		}
		router.Tier = tier

		asn, err := strconv.Atoi(record[5])
		if err != nil {
			return nil, fmt.Errorf("Invalid ASN in: %s\n", record)
		}
		router.Configuration.ASN = asn

		priority, err := strconv.Atoi(record[8])
		if err != nil {
			return nil, fmt.Errorf("Invalid priority in: %s\n", record)
		}
		router.Priority = priority

		// Booleans
		if record[6] == "1" || record[6] == "yes" || record[6] == "true" {
			router.Internal = true
		}

		// Subnet
		_, netSubnet, err := net.ParseCIDR(record[4])
		if err != nil {
			return nil, err
		}

		prefix := strings.Split(netSubnet.String(), ":/")
		if len(prefix) != 2 {
			return nil, fmt.Errorf("Bad IPv6 subnet: %s\n", netSubnet.String())
		}

		ip := fmt.Sprintf("%s:%x:%x:%x:%x", prefix[0], rand.Int31n(65536), rand.Int31n(65536), rand.Int31n(65536), rand.Int31n(65536))
		netLocal := net.ParseIP(ip)
		if netLocal == nil {
			return nil, fmt.Errorf("Bad IPv6 address: %s\n", ip)
		}

		if router.Configuration.FQDN != "" && router.Tier > 0 {
			router.DNS = []string{fmt.Sprintf("%s IN AAAA %s", router.Configuration.FQDN, netLocal)}
		}

		router.Configuration.Loopback = &RouterInterface{
			Addresses: []net.IP{netLocal},
			Routes: []RouterInterfaceRoute{
				RouterInterfaceRoute{Subnet: netSubnet}}}

		// Quagga
		routerid := net.ParseIP(fmt.Sprintf("%d.%d.%d.%d", rand.Int31n(255), rand.Int31n(255), rand.Int31n(255), rand.Int31n(255)))
		router.Configuration.RouterID = &routerid
		router.Configuration.PasswordLogin = randStringN(rand.Intn(32-16) + 16)
		router.Configuration.PasswordEnable = randStringN(rand.Intn(32-16) + 16)

		routers[router.Name] = &router
	}

	// Import "Routers.csv"
	records, err = parseCSV(filepath.Join(path, "Routers.csv"))
	if err != nil {
		return nil, err
	}

	for _, record := range records {
		if len(record) < 9 {
			return nil, fmt.Errorf("Invalid record: %s\n", record)
		}

		// Look for duplicates
		_, ok := routers[record[6]]
		if ok {
			return nil, fmt.Errorf("Duplicate record for: %s\n", record[6])
		}

		// Generate the router record
		router := Router{}
		router.Configuration = &RouterConfiguration{}

		// Text fields
		router.Organization = record[0]
		router.Configuration.FQDN = record[4]
		router.Name = record[6]
		router.Location = record[2]

		// Integers
		router.Tier = 4

		// Subnet
		_, netSubnet, err := net.ParseCIDR(record[5])
		if err != nil {
			return nil, err
		}

		router.Configuration.Loopback = &RouterInterface{
			Routes: []RouterInterfaceRoute{
				RouterInterfaceRoute{Subnet: netSubnet}}}

		routers[router.Name] = &router
	}

	// Import "Links.csv"
	records, err = parseCSV(filepath.Join(path, "Links.csv"))
	if err != nil {
		return nil, err
	}

	for _, record := range records {
		if len(record) < 7 {
			return nil, fmt.Errorf("Invalid record: %s\n", record)
		}

		// Load left router
		left, ok := routers[record[0]]
		if !ok {
			return nil, fmt.Errorf("Router doesn't exist: %s\n", record[0])
		}

		// Load right router
		right, ok := routers[record[1]]
		if !ok {
			return nil, fmt.Errorf("Router doesn't exist: %s\n", record[1])
		}

		// Parse integers
		speed, err := strconv.Atoi(record[6])
		if err != nil {
			return nil, fmt.Errorf("Invalid speed: %s\n", record[6])
		}

		leftWeight, err := strconv.Atoi(record[4])
		if err != nil && record[4] != "" {
			return nil, fmt.Errorf("Invalid priority: %s\n", record[4])
		}

		rightWeight, err := strconv.Atoi(record[5])
		if err != nil && record[5] != "" {
			return nil, fmt.Errorf("Invalid priority: %s\n", record[5])
		}

		// GPS math
		delay, err := delayGPS(left.Location, right.Location)
		if err != nil {
			return nil, err
		}

		// Left peer
		leftPeer := Peer{}
		leftPeer.Name = right.Name

		if left.Tier < 1 || left.Tier > 3 || right.Tier < 1 || right.Tier > 3 {
			leftPeer.Interface = fmt.Sprintf("br%s", interfaceName(left, right))
			if len(leftPeer.Interface) > 15 {
				return nil, fmt.Errorf("Interface name is too long: %s", leftPeer.Interface)
			}
		} else {
			leftPeer.Interface = fmt.Sprintf("v%s-1", interfaceName(left, right))
			if len(leftPeer.Interface) > 15 {
				return nil, fmt.Errorf("Interface name is too long: %s", leftPeer.Interface)
			}
		}

		leftPeer.MAC = record[2]

		linklocal, err := macToLinkLocal(record[3])
		if err != nil {
			return nil, err
		}
		leftPeer.Remote = linklocal

		leftPeer.Speed = speed
		leftPeer.Delay = delay

		if right.Tier == 4 {
			leftPeer.Routes = right.Configuration.Loopback.Routes
		}

		leftPeer.ASN = right.Configuration.ASN
		leftPeer.Weight = leftWeight

		if left.Peers == nil {
			left.Peers = []Peer{}
		}
		left.Peers = append(left.Peers, leftPeer)

		// Right peer
		rightPeer := Peer{}
		rightPeer.Name = left.Name

		if left.Tier < 1 || left.Tier > 3 || right.Tier < 1 || right.Tier > 3 {
			rightPeer.Interface = fmt.Sprintf("br%s", interfaceName(left, right))
			if len(rightPeer.Interface) > 15 {
				return nil, fmt.Errorf("Interface name is too long: %s", rightPeer.Interface)
			}
		} else {
			rightPeer.Interface = fmt.Sprintf("v%s-2", interfaceName(left, right))
			if len(rightPeer.Interface) > 15 {
				return nil, fmt.Errorf("Interface name is too long: %s", rightPeer.Interface)
			}
		}

		rightPeer.MAC = record[3]

		linklocal, err = macToLinkLocal(record[2])
		if err != nil {
			return nil, err
		}
		rightPeer.Remote = linklocal

		rightPeer.Speed = speed
		rightPeer.Delay = delay

		if left.Tier == 4 {
			rightPeer.Routes = left.Configuration.Loopback.Routes
		}

		rightPeer.ASN = left.Configuration.ASN
		rightPeer.Weight = rightWeight

		if right.Peers == nil {
			right.Peers = []Peer{}
		}
		right.Peers = append(right.Peers, rightPeer)
	}

	// Import "DNS.csv"
	records, err = parseCSV(filepath.Join(path, "DNS.csv"))
	if err != nil {
		return nil, err
	}

	for _, record := range records {
		if len(record) < 4 {
			return nil, fmt.Errorf("Invalid record: %s\n", record)
		}

		router, ok := routers[record[2]]
		if !ok {
			return nil, fmt.Errorf("Router doesn't exist: %s\n", record[2])
		}

		if router.DNS == nil {
			router.DNS = []string{}
		}
		router.DNS = append(router.DNS, fmt.Sprintf("%s IN %s %s", record[1], record[3], record[0]))
	}

	return routers, nil
}
