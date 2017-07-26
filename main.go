package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/lxc/lxd/client"
)

func main() {
	err := run()
	if err != nil {
		fmt.Fprintf(os.Stderr, "error: %s\n", err)
		os.Exit(1)
	}

	os.Exit(0)
}

func run() error {
	// Usage
	if len(os.Args) == 1 {
		fmt.Fprintf(os.Stderr, "Usage: %s create <path> [-auto-start]\n", os.Args[0])
		fmt.Fprintf(os.Stderr, "       %s destroy\n", os.Args[0])
		fmt.Fprintf(os.Stderr, "       %s generate-map <path>\n", os.Args[0])
		fmt.Fprintf(os.Stderr, "       %s generate-dns <format>\n", os.Args[0])
		fmt.Fprintf(os.Stderr, "       %s start\n", os.Args[0])
		fmt.Fprintf(os.Stderr, "       %s status\n", os.Args[0])
		fmt.Fprintf(os.Stderr, "       %s stop\n", os.Args[0])

		fmt.Fprintf(os.Stderr, "\nArguments:\n")
		flag.PrintDefaults()
		fmt.Fprintf(os.Stderr, "\n")

		return fmt.Errorf("A command must be provided.")
	}

	// Parse the arguments
	flag.Parse()

	// Connect to LXD
	c, err := lxd.ConnectLXDUnix("", nil)
	if err != nil {
		return err
	}

	// Commands
	switch os.Args[1] {
	case "create":
		return cmdCreate(c, os.Args[2:])
	case "destroy":
		return cmdDestroy(c, os.Args[2:])
	case "generate-map":
		return cmdGenerateMap(c, os.Args[2:])
	case "generate-dns":
		return cmdGenerateDNS(c, os.Args[2:])
	case "start":
		return cmdStart(c, os.Args[2:])
	case "status":
		return cmdStatus(c, os.Args[2:])
	case "stop":
		return cmdStop(c, os.Args[2:])
	}

	return nil
}
