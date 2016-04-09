```
git clone https://github.com/nsec/the-internet
wget https://buildroot.org/downloads/buildroot-2016.02.tar.bz2
tar xvf buildroot-2016.02.tar.bz2
cd buildroot-2016.02
patch -p0 < ../the-internet/image/quagga.patch
make BR2_EXTERNAL=../the-internet/image nsec_defconfig
make BR2_JLEVEL=$(nproc)

cat << EOF > metadata.yaml
architecture: x86_64
creation_date: $(date +%s)
properties:
  description: the-internet router image
  os: busybox
EOF

tar -cf metadata.tar metadata.yaml

lxc image import metadata.tar output/images/rootfs.tar --alias internet-router
```
