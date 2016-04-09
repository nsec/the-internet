# Dependencies
 * linux (>= 3.16 for all features or >= 3.13 for basic features)
 * golang (>= 1.5)
 * lxd

# Kernel
The simulation is intended to run inside nested unprivileged LXC
containers. As a result, a kernel with full support for unprivileged
containers is required, that is any kernel >= 3.13 with all the options
required by LXC enabled (see lxc-checkconfig).

Additionally, unprivileged qdisc operations requires a >= 3.16 kernel to
work, so if you want to get the simulated latencies and speeds, you need
to run a very recent kernel.

# Starting the whole thing
This tool is meant to be run on a machine or inside a container on whcih
a LXD daemon is running.

Creating an Internet simulation is basically as simple as:
 - ./the-internet create <path>
 - ./the-internet start

Generate an html/js map of your Internet with:
 - ./the-internet generate-map <destination path>

You can stop the simulation with:
 - ./the-internet stop

Or create a new one by calling the start command again.

Finally, once you want it all off your disk, you can call:
 - ./the-internet destroy
