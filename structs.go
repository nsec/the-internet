package main

import (
	"net"
)

type Routers map[string]*Router

type Router struct {
	Name         string
	Type         string
	Organization string
	Priority     int
	Tier         int
	Location     string
	DNS          []string
	Internal     bool

	Configuration *RouterConfiguration
	Peers         []Peer
}

type RouterConfiguration struct {
	FQDN           string
	Loopback       *RouterInterface
	ASN            int
	RouterID       *net.IP
	PasswordLogin  string
	PasswordEnable string
}

type RouterInterface struct {
	Addresses []net.IP
	Routes    []RouterInterfaceRoute
}

type RouterInterfaceRoute struct {
	Subnet  *net.IPNet
	Gateway *net.IP
}

type Peer struct {
	Name      string
	Interface string
	MAC       string
	Remote    string
	Speed     int
	Delay     int
	Routes    []RouterInterfaceRoute
	ASN       int
	Weight    int
}
