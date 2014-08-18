# Dependencies
 * linux (>= 3.16 for all features or >= 3.13 for basic features)
 * lxc (>= 1.0.0)
 * python3
 * python3-lxc (>= 1.0.0)
 * python3-netaddr

# Kernel
The simulation is intended to run inside nested unprivileged LXC
containers. As a result, a kernel with full support for unprivileged
containers is required, that is any kernel >= 3.13 with all the options
required by LXC enabled (see lxc-checkconfig).

Additionally, unprivileged qdisc operations requires a >= 3.16 kernel to
work, so if you want to get the simulated latencies and speeds, you need
to run a very recent kernel.

# User namespaces
The python3 script in this branch assumes that your user is allowed to
create unprivileged containers and that a sane default configuration has
already been defined in ~/.config/lxc/default.conf

To get this setup, you may want to follow those instructions:
https://www.stgraber.org/2014/01/17/lxc-1-0-unprivileged-containers/

# Starting the whole thing
Creating an Internet simulation is basically as simple as:
 - ./the-internet create
 - ./the-internet start

Once those two commands complete, you'll have a new LXC container called
"the-internet" running on your system, within which about 250
sub-containers will be running, acting as BGP or OSPF routers.

You can get a list of routers with:
 - ./the-internet list-routers

Generate an html/js map of your Internet with:
 - ./the-internet map

And enter any of the routers using:
 - ./the-internet shell ROUTER-NAME

The same command without a router name will instead give you a shell
inside the main container where you can then observe all of the
sub-containers.

You can stop the simulation with:
 - ./the-internet stop

Or create a new one by calling the start command again.

To get security and bugfix updates applied to all your containers, you
can simply run the update command and then start the simulation again.

Finally, once you want it all off your disk, you can call:
 - ./the-internet destroy
