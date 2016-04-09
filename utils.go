package main

import (
	"encoding/hex"
	"fmt"
	"math"
	"math/rand"
	"strconv"
	"strings"
	"time"
)

func logf(format string, args ...interface{}) {
	fmt.Printf(fmt.Sprintf("[%s] %s\n", time.Now().Format(time.StampMilli), format), args...)
}

func randStringN(n int) string {
	var letterRunes = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

	b := make([]rune, n)
	for i := range b {
		b[i] = letterRunes[rand.Intn(len(letterRunes))]
	}
	return string(b)
}

func interfaceName(left *Router, right *Router) string {
	name := ""

	if left.Configuration.ASN > 0 {
		name = fmt.Sprintf("%d", left.Configuration.ASN)
	} else {
		name = fmt.Sprintf("%s", strings.TrimPrefix(left.Name, "ctn-"))
	}

	if right.Configuration.ASN > 0 {
		name = fmt.Sprintf("%s-%d", name, right.Configuration.ASN)
	} else {
		name = fmt.Sprintf("%s-%s", name, strings.TrimPrefix(right.Name, "ctn-"))
	}

	return fmt.Sprintf("%s", name)
}

func delayGPS(source string, destination string) (int, error) {
	src := strings.Split(source, "/")
	lat1, err := strconv.ParseFloat(src[0], 64)
	if err != nil {
		return -1, err
	}

	lon1, err := strconv.ParseFloat(src[1], 64)
	if err != nil {
		return -1, err
	}

	dest := strings.Split(destination, "/")
	lat2, err := strconv.ParseFloat(dest[0], 64)
	if err != nil {
		return -1, err
	}

	lon2, err := strconv.ParseFloat(dest[1], 64)
	if err != nil {
		return -1, err
	}

	radius := float64(6371)

	dlat := (lat2 - lat1) / (180 / math.Pi)
	dlon := (lon2 - lon1) / (180 / math.Pi)

	a := math.Sin(dlat/2)*math.Sin(dlat/2) + math.Cos(lat1/(180*math.Pi))*math.Cos(lat2/(180*math.Pi))*math.Sin(dlon/2)*math.Sin(dlon/2)
	c := 2 * math.Atan2(math.Sqrt(a), math.Sqrt(1-a))
	d := radius * c
	speed := float64(139)

	return int(math.Floor(d/speed + 0.5)), nil
}

func macToLinkLocal(mac string) (string, error) {
	if len(mac) != 17 {
		return "", fmt.Errorf("Bad MAC address: %s", mac)
	}

	fields := strings.Split(mac, ":")

	bytes, err := hex.DecodeString(fields[0])
	if err != nil {
		return "", fmt.Errorf("Bad MAC address: %s", mac)
	}

	bytes[0] = bytes[0] ^ 2
	fields[0] = hex.EncodeToString(bytes)

	return fmt.Sprintf("fe80::%s%s:%sff:fe%s:%s%s", fields[0], fields[1], fields[2], fields[3], fields[4], fields[5]), nil
}
