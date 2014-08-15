
var legacy_coord = [59.340467, 18.058863];
var legacy_marker = L.marker(legacy_coord, {icon: tier0Icon}).addTo(map);

legacy_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('OpenFace<br/>legacynet.openface.intl.ctf<br/>Tier 0<br/>AS: 1')
        .openOn(map);
});

var bgp_levelone05_coord = [32.78104, -96.79642];
var bgp_levelone05_marker = L.marker(bgp_levelone05_coord, {icon: tier1Icon}).addTo(map);

bgp_levelone05_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Level1 Communications<br/>core.dallas.level3.level2.level1.net.ctf<br/>Tier 1<br/>AS: 2204')
        .openOn(map);
});

var bgp_levelone06_coord = [41.87835, -87.63245];
var bgp_levelone06_marker = L.marker(bgp_levelone06_coord, {icon: tier1Icon}).addTo(map);

bgp_levelone06_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Level1 Communications<br/>core.chicago.level3.level2.level1.net.ctf<br/>Tier 1<br/>AS: 2205')
        .openOn(map);
});

var bgp_levelone07_coord = [40.71427, -74.00597];
var bgp_levelone07_marker = L.marker(bgp_levelone07_coord, {icon: tier1Icon}).addTo(map);

bgp_levelone07_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Level1 Communications<br/>core.ny.level3.level2.level1.net.ctf<br/>Tier 1<br/>AS: 2206')
        .openOn(map);
});

var bgp_levelone08_coord = [43.67192, -79.37691];
var bgp_levelone08_marker = L.marker(bgp_levelone08_coord, {icon: tier1Icon}).addTo(map);

bgp_levelone08_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Level1 Communications<br/>core.tor.level3.level2.level1.net.ctf<br/>Tier 1<br/>AS: 2207')
        .openOn(map);
});

var bgp_levelone10_coord = [19.43137, -99.13513];
var bgp_levelone10_marker = L.marker(bgp_levelone10_coord, {icon: tier1Icon}).addTo(map);

bgp_levelone10_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Level1 Communications<br/>core.mexico.level3.level2.level1.net.ctf<br/>Tier 1<br/>AS: 2209')
        .openOn(map);
});

var bgp_levelone12_coord = [52.37097, 4.89278];
var bgp_levelone12_marker = L.marker(bgp_levelone12_coord, {icon: tier1Icon}).addTo(map);

bgp_levelone12_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Level1 Communications<br/>core.ams.level3.level2.level1.net.ctf<br/>Tier 1<br/>AS: 2211')
        .openOn(map);
});

var bgp_levelone14_coord = [59.340467, 18.058863];
var bgp_levelone14_marker = L.marker(bgp_levelone14_coord, {icon: tier1Icon}).addTo(map);

bgp_levelone14_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Level1 Communications<br/>core.stockholm.level3.level2.level1.net.ctf<br/>Tier 1<br/>AS: 2213')
        .openOn(map);
});

var bgp_tp08_coord = [44.98195, -93.26946];
var bgp_tp08_marker = L.marker(bgp_tp08_coord, {icon: tier1Icon}).addTo(map);

bgp_tp08_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('TornadoPneumatic<br/>pop1.minneapolis.tp.net.ctf<br/>Tier 1<br/>AS: 2307')
        .openOn(map);
});

var bgp_tp09_coord = [41.87835, -87.63245];
var bgp_tp09_marker = L.marker(bgp_tp09_coord, {icon: tier1Icon}).addTo(map);

bgp_tp09_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('TornadoPneumatic<br/>pop9.chicago.tp.net.ctf<br/>Tier 1<br/>AS: 2308')
        .openOn(map);
});

var bgp_tp11_coord = [25.79470, -80.21187];
var bgp_tp11_marker = L.marker(bgp_tp11_coord, {icon: tier1Icon}).addTo(map);

bgp_tp11_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('TornadoPneumatic<br/>pop4.miami.tp.net.ctf<br/>Tier 1<br/>AS: 2310')
        .openOn(map);
});

var bgp_tp12_coord = [38.89762, -77.03651];
var bgp_tp12_marker = L.marker(bgp_tp12_coord, {icon: tier1Icon}).addTo(map);

bgp_tp12_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('TornadoPneumatic<br/>pop8.washington.tp.net.ctf<br/>Tier 1<br/>AS: 2311')
        .openOn(map);
});

var bgp_tp14_coord = [40.71427, -74.00597];
var bgp_tp14_marker = L.marker(bgp_tp14_coord, {icon: tier1Icon}).addTo(map);

bgp_tp14_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('TornadoPneumatic<br/>pop8.ny.tp.net.ctf<br/>Tier 1<br/>AS: 2313')
        .openOn(map);
});

var bgp_tp16_coord = [51.50870, -0.12600];
var bgp_tp16_marker = L.marker(bgp_tp16_coord, {icon: tier1Icon}).addTo(map);

bgp_tp16_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('TornadoPneumatic<br/>po7.london.tp.net.ctf<br/>Tier 1<br/>AS: 2315')
        .openOn(map);
});

var bgp_tp17_coord = [52.37097, 4.89278];
var bgp_tp17_marker = L.marker(bgp_tp17_coord, {icon: tier1Icon}).addTo(map);

bgp_tp17_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('TornadoPneumatic<br/>pop7.ams.tp.net.ctf<br/>Tier 1<br/>AS: 2316')
        .openOn(map);
});

var bgp_tp19_coord = [47.36641, 8.53899];
var bgp_tp19_marker = L.marker(bgp_tp19_coord, {icon: tier1Icon}).addTo(map);

bgp_tp19_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('TornadoPneumatic<br/>pop11.zurich.tp.net.ctf<br/>Tier 1<br/>AS: 2318')
        .openOn(map);
});

var bgp_tp20_coord = [55.74943, 37.61169];
var bgp_tp20_marker = L.marker(bgp_tp20_coord, {icon: tier1Icon}).addTo(map);

bgp_tp20_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('TornadoPneumatic<br/>pop42.moscow.tp.net.ctf<br/>Tier 1<br/>AS: 2319')
        .openOn(map);
});

var bgp_toto01_coord = [19.07484, 72.88261];
var bgp_toto01_marker = L.marker(bgp_toto01_coord, {icon: tier1Icon}).addTo(map);

bgp_toto01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.mumbai.toto.in.ctf<br/>Tier 1<br/>AS: 2400')
        .openOn(map);
});

var bgp_toto05_coord = [27.67973, 85.33630];
var bgp_toto05_marker = L.marker(bgp_toto05_coord, {icon: tier1Icon}).addTo(map);

bgp_toto05_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.kathmandu.toto.in.ctf<br/>Tier 1<br/>AS: 2404')
        .openOn(map);
});

var bgp_toto06_coord = [16.77940, 96.14685];
var bgp_toto06_marker = L.marker(bgp_toto06_coord, {icon: tier1Icon}).addTo(map);

bgp_toto06_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.yangon.toto.in.ctf<br/>Tier 1<br/>AS: 2405')
        .openOn(map);
});

var bgp_toto07_coord = [13.72721, 100.53040];
var bgp_toto07_marker = L.marker(bgp_toto07_coord, {icon: tier1Icon}).addTo(map);

bgp_toto07_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.bangkok.toto.in.ctf<br/>Tier 1<br/>AS: 2406')
        .openOn(map);
});

var bgp_toto09_coord = [1.28368, 103.82655];
var bgp_toto09_marker = L.marker(bgp_toto09_coord, {icon: tier1Icon}).addTo(map);

bgp_toto09_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.singapore.toto.in.ctf<br/>Tier 1<br/>AS: 2408')
        .openOn(map);
});

var bgp_toto10_coord = [22.20852, 113.54851];
var bgp_toto10_marker = L.marker(bgp_toto10_coord, {icon: tier1Icon}).addTo(map);

bgp_toto10_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.macao.toto.in.ctf<br/>Tier 1<br/>AS: 2409')
        .openOn(map);
});

var bgp_toto11_coord = [22.28062, 114.15679];
var bgp_toto11_marker = L.marker(bgp_toto11_coord, {icon: tier1Icon}).addTo(map);

bgp_toto11_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.hongkong.toto.in.ctf<br/>Tier 1<br/>AS: 2410')
        .openOn(map);
});

var bgp_toto13_coord = [31.22598, 121.47446];
var bgp_toto13_marker = L.marker(bgp_toto13_coord, {icon: tier1Icon}).addTo(map);

bgp_toto13_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.shanghai.toto.in.ctf<br/>Tier 1<br/>AS: 2412')
        .openOn(map);
});

var bgp_toto14_coord = [39.89458, 116.39397];
var bgp_toto14_marker = L.marker(bgp_toto14_coord, {icon: tier1Icon}).addTo(map);

bgp_toto14_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.beijing.toto.in.ctf<br/>Tier 1<br/>AS: 2413')
        .openOn(map);
});

var bgp_toto15_coord = [37.54529, 126.94204];
var bgp_toto15_marker = L.marker(bgp_toto15_coord, {icon: tier1Icon}).addTo(map);

bgp_toto15_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.seoul.toto.in.ctf<br/>Tier 1<br/>AS: 2414')
        .openOn(map);
});

var bgp_toto22_coord = [24.86975, 67.02003];
var bgp_toto22_marker = L.marker(bgp_toto22_coord, {icon: tier1Icon}).addTo(map);

bgp_toto22_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.karachi.toto.in.ctf<br/>Tier 1<br/>AS: 2421')
        .openOn(map);
});

var bgp_toto23_coord = [25.27283, 55.30535];
var bgp_toto23_marker = L.marker(bgp_toto23_coord, {icon: tier1Icon}).addTo(map);

bgp_toto23_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.dubai.toto.in.ctf<br/>Tier 1<br/>AS: 2422')
        .openOn(map);
});

var bgp_toto24_coord = [25.28329, 51.52287];
var bgp_toto24_marker = L.marker(bgp_toto24_coord, {icon: tier1Icon}).addTo(map);

bgp_toto24_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.doha.toto.in.ctf<br/>Tier 1<br/>AS: 2423')
        .openOn(map);
});

var bgp_toto25_coord = [31.76940, 35.21221];
var bgp_toto25_marker = L.marker(bgp_toto25_coord, {icon: tier1Icon}).addTo(map);

bgp_toto25_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.jerusalem.toto.in.ctf<br/>Tier 1<br/>AS: 2424')
        .openOn(map);
});

var bgp_toto26_coord = [36.88767, 30.70670];
var bgp_toto26_marker = L.marker(bgp_toto26_coord, {icon: tier1Icon}).addTo(map);

bgp_toto26_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.antalya.toto.in.ctf<br/>Tier 1<br/>AS: 2425')
        .openOn(map);
});

var bgp_toto27_coord = [41.00467, 28.97558];
var bgp_toto27_marker = L.marker(bgp_toto27_coord, {icon: tier1Icon}).addTo(map);

bgp_toto27_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.istanbul.toto.in.ctf<br/>Tier 1<br/>AS: 2426')
        .openOn(map);
});

var bgp_toto28_coord = [44.43065, 26.10249];
var bgp_toto28_marker = L.marker(bgp_toto28_coord, {icon: tier1Icon}).addTo(map);

bgp_toto28_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.bukarest.toto.in.ctf<br/>Tier 1<br/>AS: 2427')
        .openOn(map);
});

var bgp_toto29_coord = [50.45614, 30.52826];
var bgp_toto29_marker = L.marker(bgp_toto29_coord, {icon: tier1Icon}).addTo(map);

bgp_toto29_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.kiev.toto.in.ctf<br/>Tier 1<br/>AS: 2428')
        .openOn(map);
});

var bgp_toto30_coord = [47.36641, 8.53899];
var bgp_toto30_marker = L.marker(bgp_toto30_coord, {icon: tier1Icon}).addTo(map);

bgp_toto30_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Toto Communications<br/>gw.zurich.toto.in.ctf<br/>Tier 1<br/>AS: 2429')
        .openOn(map);
});

var bgp_pacman04_coord = [43.67192, -79.37691];
var bgp_pacman04_marker = L.marker(bgp_pacman04_coord, {icon: tier2Icon}).addTo(map);

bgp_pacman04_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('VideoPacMan<br/>gw01.tor.videopacman.net.ctf<br/>Tier 2<br/>AS: 2103')
        .openOn(map);
});

var bgp_le01_coord = [39.89458, 116.39397];
var bgp_le01_marker = L.marker(bgp_le01_coord, {icon: tier2Icon}).addTo(map);

bgp_le01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('LevelEast<br/>core01.beijing.leveleast.cn.ctf<br/>Tier 2<br/>AS: 2600')
        .openOn(map);
});

var bgp_le03_coord = [38.87914, 115.47180];
var bgp_le03_marker = L.marker(bgp_le03_coord, {icon: tier2Icon}).addTo(map);

bgp_le03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('LevelEast<br/>core01.baoding.leveleast.cn.ctf<br/>Tier 2<br/>AS: 2602')
        .openOn(map);
});

var bgp_le06_coord = [34.33082, 108.95691];
var bgp_le06_marker = L.marker(bgp_le06_coord, {icon: tier2Icon}).addTo(map);

bgp_le06_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('LevelEast<br/>core01.xian.leveleast.cn.ctf<br/>Tier 2<br/>AS: 2605')
        .openOn(map);
});

var bgp_le07_coord = [30.58694, 114.31824];
var bgp_le07_marker = L.marker(bgp_le07_coord, {icon: tier2Icon}).addTo(map);

bgp_le07_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('LevelEast<br/>core01.wuhan.leveleast.cn.ctf<br/>Tier 2<br/>AS: 2606')
        .openOn(map);
});

var bgp_le10_coord = [31.22598, 121.47446];
var bgp_le10_marker = L.marker(bgp_le10_coord, {icon: tier2Icon}).addTo(map);

bgp_le10_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('LevelEast<br/>core01.shanghai.leveleast.cn.ctf<br/>Tier 2<br/>AS: 2609')
        .openOn(map);
});

var bgp_gruyere01_coord = [46.21087, 6.13466];
var bgp_gruyere01_marker = L.marker(bgp_gruyere01_coord, {icon: tier2Icon}).addTo(map);

bgp_gruyere01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Gruyere<br/>core01.geneva.gruyere.ch.ctf<br/>Tier 2<br/>AS: 2900')
        .openOn(map);
});

var bgp_gruyere02_coord = [46.51853, 6.64089];
var bgp_gruyere02_marker = L.marker(bgp_gruyere02_coord, {icon: tier2Icon}).addTo(map);

bgp_gruyere02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Gruyere<br/>core01.lausanne.gruyere.ch.ctf<br/>Tier 2<br/>AS: 2901')
        .openOn(map);
});

var bgp_gruyere03_coord = [47.57060, 7.59911];
var bgp_gruyere03_marker = L.marker(bgp_gruyere03_coord, {icon: tier2Icon}).addTo(map);

bgp_gruyere03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Gruyere<br/>core01.bern.gruyere.ch.ctf<br/>Tier 2<br/>AS: 2902')
        .openOn(map);
});

var bgp_gruyere06_coord = [47.57060, 7.59911];
var bgp_gruyere06_marker = L.marker(bgp_gruyere06_coord, {icon: tier2Icon}).addTo(map);

bgp_gruyere06_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Gruyere<br/>core01.basel.gruyere.ch.ctf<br/>Tier 2<br/>AS: 2905')
        .openOn(map);
});

var bgp_gruyere07_coord = [47.36641, 8.53899];
var bgp_gruyere07_marker = L.marker(bgp_gruyere07_coord, {icon: tier2Icon}).addTo(map);

bgp_gruyere07_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Gruyere<br/>core01.zurich.gruyere.ch.ctf<br/>Tier 2<br/>AS: 2906')
        .openOn(map);
});

var bgp_sbrinz02_coord = [47.36641, 8.53899];
var bgp_sbrinz02_marker = L.marker(bgp_sbrinz02_coord, {icon: tier2Icon}).addTo(map);

bgp_sbrinz02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Sbrinz<br/>rtr01.zurich.sbrinz.ch.ctf<br/>Tier 2<br/>AS: 3001')
        .openOn(map);
});

var bgp_marathon02_coord = [44.98195, -93.26946];
var bgp_marathon02_marker = L.marker(bgp_marathon02_coord, {icon: tier2Icon}).addTo(map);

bgp_marathon02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Marathon<br/>run01.baby.run.minneapolis.marathon.com.ctf<br/>Tier 2<br/>AS: 1601')
        .openOn(map);
});

var bgp_marathon03_coord = [46.91129, -98.69843];
var bgp_marathon03_marker = L.marker(bgp_marathon03_coord, {icon: tier2Icon}).addTo(map);

bgp_marathon03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Marathon<br/>run01.baby.run.jamestown.marathon.com.ctf<br/>Tier 2<br/>AS: 1602')
        .openOn(map);
});

var bgp_marathon08_coord = [32.40982, -84.97925];
var bgp_marathon08_marker = L.marker(bgp_marathon08_coord, {icon: tier2Icon}).addTo(map);

bgp_marathon08_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Marathon<br/>run01.baby.run.columbus.marathon.com.ctf<br/>Tier 2<br/>AS: 1607')
        .openOn(map);
});

var bgp_marathon09_coord = [38.89762, -77.03651];
var bgp_marathon09_marker = L.marker(bgp_marathon09_coord, {icon: tier2Icon}).addTo(map);

bgp_marathon09_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Marathon<br/>run01.baby.run.washington.marathon.com.ctf<br/>Tier 2<br/>AS: 1608')
        .openOn(map);
});

var bgp_marathon10_coord = [25.79470, -80.21187];
var bgp_marathon10_marker = L.marker(bgp_marathon10_coord, {icon: tier2Icon}).addTo(map);

bgp_marathon10_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Marathon<br/>run01.baby.run.miami.marathon.com.ctf<br/>Tier 2<br/>AS: 1609')
        .openOn(map);
});

var bgp_ketchup01_coord = [19.43137, -99.13513];
var bgp_ketchup01_marker = L.marker(bgp_ketchup01_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.mexico.mayo.com.ctf<br/>Tier 2<br/>AS: 1800')
        .openOn(map);
});

var bgp_ketchup02_coord = [14.61872, -90.52460];
var bgp_ketchup02_marker = L.marker(bgp_ketchup02_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.guatemala.mayo.com.ctf<br/>Tier 2<br/>AS: 1801')
        .openOn(map);
});

var bgp_ketchup03_coord = [14.07589, -87.21222];
var bgp_ketchup03_marker = L.marker(bgp_ketchup03_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.tegucigalpa.mayo.com.ctf<br/>Tier 2<br/>AS: 1802')
        .openOn(map);
});

var bgp_ketchup04_coord = [12.13181, -86.23718];
var bgp_ketchup04_marker = L.marker(bgp_ketchup04_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup04_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.managua.mayo.com.ctf<br/>Tier 2<br/>AS: 1803')
        .openOn(map);
});

var bgp_ketchup05_coord = [9.85310, -83.92181];
var bgp_ketchup05_marker = L.marker(bgp_ketchup05_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup05_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.cartago.mayo.com.ctf<br/>Tier 2<br/>AS: 1804')
        .openOn(map);
});

var bgp_ketchup06_coord = [8.97851, -79.50256];
var bgp_ketchup06_marker = L.marker(bgp_ketchup06_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup06_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.panama.mayo.com.ctf<br/>Tier 2<br/>AS: 1805')
        .openOn(map);
});

var bgp_ketchup07_coord = [4.49121, -74.01489];
var bgp_ketchup07_marker = L.marker(bgp_ketchup07_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup07_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.bogota.mayo.com.ctf<br/>Tier 2<br/>AS: 1806')
        .openOn(map);
});

var bgp_ketchup09_coord = [-0.31620, -78.49731];
var bgp_ketchup09_marker = L.marker(bgp_ketchup09_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup09_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.quito.mayo.com.ctf<br/>Tier 2<br/>AS: 1808')
        .openOn(map);
});

var bgp_ketchup10_coord = [-12.09908, -77.01416];
var bgp_ketchup10_marker = L.marker(bgp_ketchup10_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup10_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.lima.mayo.com.ctf<br/>Tier 2<br/>AS: 1809')
        .openOn(map);
});

var bgp_ketchup11_coord = [-33.46252, -70.64758];
var bgp_ketchup11_marker = L.marker(bgp_ketchup11_coord, {icon: tier2Icon}).addTo(map);

bgp_ketchup11_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Mayo Group<br/>gw.ketchup.santiago.mayo.com.ctf<br/>Tier 2<br/>AS: 1810')
        .openOn(map);
});

var bgp_flag01_coord = [50.45614, 30.52826];
var bgp_flag01_marker = L.marker(bgp_flag01_coord, {icon: tier2Icon}).addTo(map);

bgp_flag01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Flag telecom<br/>core01.kiev.flag.net.ctf<br/>Tier 2<br/>AS: 3100')
        .openOn(map);
});

var bgp_flag02_coord = [53.86832, 27.61963];
var bgp_flag02_marker = L.marker(bgp_flag02_coord, {icon: tier2Icon}).addTo(map);

bgp_flag02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Flag telecom<br/>core01.minsk.flag.net.ctf<br/>Tier 2<br/>AS: 3101')
        .openOn(map);
});

var bgp_flag09_coord = [55.74943, 37.61169];
var bgp_flag09_marker = L.marker(bgp_flag09_coord, {icon: tier2Icon}).addTo(map);

bgp_flag09_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Flag telecom<br/>core01.moscow.flag.net.ctf<br/>Tier 2<br/>AS: 3108')
        .openOn(map);
});

var bgp_nlrail01_coord = [24.86975, 67.02003];
var bgp_nlrail01_marker = L.marker(bgp_nlrail01_coord, {icon: tier2Icon}).addTo(map);

bgp_nlrail01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Nationnal lambda rail<br/>gw01.karachi.nlrail.net.ctf<br/>Tier 2<br/>AS: 3200')
        .openOn(map);
});

var bgp_nlrail02_coord = [30.17570, 71.48804];
var bgp_nlrail02_marker = L.marker(bgp_nlrail02_coord, {icon: tier2Icon}).addTo(map);

bgp_nlrail02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Nationnal lambda rail<br/>gw01.multan.nlrail.net.ctf<br/>Tier 2<br/>AS: 3201')
        .openOn(map);
});

var bgp_nlrail03_coord = [34.47430, 69.23584];
var bgp_nlrail03_marker = L.marker(bgp_nlrail03_coord, {icon: tier2Icon}).addTo(map);

bgp_nlrail03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Nationnal lambda rail<br/>gw01.kabul.nlrail.net.ctf<br/>Tier 2<br/>AS: 3202')
        .openOn(map);
});

var bgp_nlrail04_coord = [35.62549, 51.52588];
var bgp_nlrail04_marker = L.marker(bgp_nlrail04_coord, {icon: tier2Icon}).addTo(map);

bgp_nlrail04_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Nationnal lambda rail<br/>gw01.tehran.nlrail.net.ctf<br/>Tier 2<br/>AS: 3203')
        .openOn(map);
});

var bgp_nlrail05_coord = [33.27027, 44.45068];
var bgp_nlrail05_marker = L.marker(bgp_nlrail05_coord, {icon: tier2Icon}).addTo(map);

bgp_nlrail05_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Nationnal lambda rail<br/>gw01.baghdad.nlrail.net.ctf<br/>Tier 2<br/>AS: 3204')
        .openOn(map);
});

var bgp_nlrail06_coord = [31.76940, 35.21221];
var bgp_nlrail06_marker = L.marker(bgp_nlrail06_coord, {icon: tier2Icon}).addTo(map);

bgp_nlrail06_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Nationnal lambda rail<br/>gw01.jerusalem.nlrail.net.ctf<br/>Tier 2<br/>AS: 3205')
        .openOn(map);
});

var bgp_ggs01_coord = [37.54529, 126.94204];
var bgp_ggs01_marker = L.marker(bgp_ggs01_coord, {icon: tier2Icon}).addTo(map);

bgp_ggs01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('GangnamSpeed<br/>op01.op.oppa.seoul.ggs.kr.ctf<br/>Tier 2<br/>AS: 100')
        .openOn(map);
});

var bgp_51merica01_coord = [43.67192, -79.37691];
var bgp_51merica01_marker = L.marker(bgp_51merica01_coord, {icon: tier3Icon}).addTo(map);

bgp_51merica01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('51th state of Merica<br/>core01.tor.rednet.net.ctf<br/>Tier 3<br/>AS: 3800')
        .openOn(map);
});

var bgp_51merica02_coord = [45.46908, -73.54051];
var bgp_51merica02_marker = L.marker(bgp_51merica02_coord, {icon: tier3Icon}).addTo(map);

bgp_51merica02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('51th state of Merica<br/>nun01.mtl.rednet.net.ctf<br/>Tier 3<br/>AS: 3801')
        .openOn(map);
});

var bgp_rao01_coord = [36.61821, 101.78009];
var bgp_rao01_marker = L.marker(bgp_rao01_coord, {icon: tier3Icon}).addTo(map);

bgp_rao01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('rao\'s exquisite hosting of the people<br/>gov.you.shall.not.pass.greatwall.cn.ctf<br/>Tier 3<br/>AS: 2500')
        .openOn(map);
});

var bgp_rao02_coord = [36.05625, 103.84003];
var bgp_rao02_marker = L.marker(bgp_rao02_coord, {icon: tier3Icon}).addTo(map);

bgp_rao02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('rao\'s exquisite hosting of the people<br/>core01.you.shall.not.pass.greatwall.cn.ctf<br/>Tier 3<br/>AS: 2501')
        .openOn(map);
});

var bgp_rao03_coord = [34.33082, 108.95691];
var bgp_rao03_marker = L.marker(bgp_rao03_coord, {icon: tier3Icon}).addTo(map);

bgp_rao03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('rao\'s exquisite hosting of the people<br/>core02.you.shall.not.pass.greatwall.cn.ctf<br/>Tier 3<br/>AS: 2502')
        .openOn(map);
});

var bgp_raclette01_coord = [46.21087, 6.13466];
var bgp_raclette01_marker = L.marker(bgp_raclette01_coord, {icon: tier3Icon}).addTo(map);

bgp_raclette01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Raclette<br/>fondue01.geneva.raclette.ch.ctf<br/>Tier 3<br/>AS: 2800')
        .openOn(map);
});

var bgp_raclette02_coord = [46.51853, 6.64089];
var bgp_raclette02_marker = L.marker(bgp_raclette02_coord, {icon: tier3Icon}).addTo(map);

bgp_raclette02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Raclette<br/>fondue01.lausanne.raclette.ch.ctf<br/>Tier 3<br/>AS: 2801')
        .openOn(map);
});

var bgp_merica01_coord = [19.91503, -75.14297];
var bgp_merica01_marker = L.marker(bgp_merica01_coord, {icon: tier3Icon}).addTo(map);

bgp_merica01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Merica<br/>a.merica.fidel.slurp.gov.net.ctf<br/>Tier 3<br/>AS: 1500')
        .openOn(map);
});

var bgp_merica02_coord = [25.79470, -80.21187];
var bgp_merica02_marker = L.marker(bgp_merica02_coord, {icon: tier3Icon}).addTo(map);

bgp_merica02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Merica<br/>a.merica.miami.slurp.gov.net.ctf<br/>Tier 3<br/>AS: 1501')
        .openOn(map);
});

var bgp_merica03_coord = [38.54825, -77.32890];
var bgp_merica03_marker = L.marker(bgp_merica03_coord, {icon: tier3Icon}).addTo(map);

bgp_merica03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Merica<br/>a.merica.quantico.slurp.gov.net.ctf<br/>Tier 3<br/>AS: 1502')
        .openOn(map);
});

var bgp_merica04_coord = [38.89762, -77.03651];
var bgp_merica04_marker = L.marker(bgp_merica04_coord, {icon: tier3Icon}).addTo(map);

bgp_merica04_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Merica<br/>a.merica.washington.slurp.gov.net.ctf<br/>Tier 3<br/>AS: 1503')
        .openOn(map);
});

var bgp_merica05_coord = [46.91129, -98.69843];
var bgp_merica05_marker = L.marker(bgp_merica05_coord, {icon: tier3Icon}).addTo(map);

bgp_merica05_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Merica<br/>a.merica.jamestown.slurp.gov.net.ctf<br/>Tier 3<br/>AS: 1504')
        .openOn(map);
});

var bgp_merica06_coord = [44.98195, -93.26946];
var bgp_merica06_marker = L.marker(bgp_merica06_coord, {icon: tier3Icon}).addTo(map);

bgp_merica06_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Merica<br/>a.merica.minneapolis.slurp.gov.net.ctf<br/>Tier 3<br/>AS: 1505')
        .openOn(map);
});

var bgp_concarne01_coord = [-34.60314, -70.98610];
var bgp_concarne01_marker = L.marker(bgp_concarne01_coord, {icon: tier3Icon}).addTo(map);

bgp_concarne01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Con Carne<br/>gw01.sanfernando.con.carne.com.ctf<br/>Tier 3<br/>AS: 3500')
        .openOn(map);
});

var bgp_concarne02_coord = [-34.15317, -70.73341];
var bgp_concarne02_marker = L.marker(bgp_concarne02_coord, {icon: tier3Icon}).addTo(map);

bgp_concarne02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Con Carne<br/>gw01.rancuaga.con.carne.com.ctf<br/>Tier 3<br/>AS: 3501')
        .openOn(map);
});

var bgp_concarne03_coord = [-33.46252, -70.64758];
var bgp_concarne03_marker = L.marker(bgp_concarne03_coord, {icon: tier3Icon}).addTo(map);

bgp_concarne03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Con Carne<br/>gw01.santiago.con.carne.com.ctf<br/>Tier 3<br/>AS: 3502')
        .openOn(map);
});

var bgp_auskev01_coord = [51.24484, 30.17120];
var bgp_auskev01_marker = L.marker(bgp_auskev01_coord, {icon: tier3Icon}).addTo(map);

bgp_auskev01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Demokratik Republik of Auskev<br/>gw01.nuclear.auskev.kev.ru.ctf<br/>Tier 3<br/>AS: 1400')
        .openOn(map);
});

var bgp_auskev02_coord = [50.45614, 30.52826];
var bgp_auskev02_marker = L.marker(bgp_auskev02_coord, {icon: tier3Icon}).addTo(map);

bgp_auskev02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Demokratik Republik of Auskev<br/>gw01.kiev.auskev.kev.ru.ctf<br/>Tier 3<br/>AS: 1401')
        .openOn(map);
});

var bgp_durka01_coord = [30.37288, 69.32373];
var bgp_durka01_marker = L.marker(bgp_durka01_coord, {icon: tier3Icon}).addTo(map);

bgp_durka01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Durkakistan Telekom<br/>route01.gov.durkaisp.net.ctf<br/>Tier 3<br/>AS: 1300')
        .openOn(map);
});

var bgp_durka02_coord = [30.17570, 71.48804];
var bgp_durka02_marker = L.marker(bgp_durka02_coord, {icon: tier3Icon}).addTo(map);

bgp_durka02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Durkakistan Telekom<br/>route02.multan.durkaisp.net.ctf<br/>Tier 3<br/>AS: 1301')
        .openOn(map);
});

var bgp_durka03_coord = [24.86975, 67.02003];
var bgp_durka03_marker = L.marker(bgp_durka03_coord, {icon: tier3Icon}).addTo(map);

bgp_durka03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('Durkakistan Telekom<br/>route03.karachi.durkaisp.net.ctf<br/>Tier 3<br/>AS: 1302')
        .openOn(map);
});

var bgp_ggisp01_coord = [37.76055, 128.89469];
var bgp_ggisp01_marker = L.marker(bgp_ggisp01_coord, {icon: tier3Icon}).addTo(map);

bgp_ggisp01_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('GangnamISP<br/>gw28.fission.subnet.ggs.kr.ctf<br/>Tier 3<br/>AS: 1900')
        .openOn(map);
});

var bgp_ggisp02_coord = [37.34003, 127.93871];
var bgp_ggisp02_marker = L.marker(bgp_ggisp02_coord, {icon: tier3Icon}).addTo(map);

bgp_ggisp02_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('GangnamISP<br/>gw28.wonju.subnet.ggs.kr.ctf<br/>Tier 3<br/>AS: 1901')
        .openOn(map);
});

var bgp_ggisp03_coord = [37.54529, 126.94204];
var bgp_ggisp03_marker = L.marker(bgp_ggisp03_coord, {icon: tier3Icon}).addTo(map);

bgp_ggisp03_marker.on('mousedown', function(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('GangnamISP<br/>gw28.seoul.subnet.ggs.kr.ctf<br/>Tier 3<br/>AS: 1902')
        .openOn(map);
});

var line0 = [bgp_51merica02_coord, bgp_51merica01_coord]
L.polyline(line0, {color: 'blue', weight: 1}).addTo(map);

var line1 = [bgp_pacman04_coord, bgp_51merica01_coord]
L.polyline(line1, {color: 'blue', weight: 1}).addTo(map);

var line2 = [bgp_levelone05_coord, bgp_levelone06_coord]
L.polyline(line2, {color: 'blue', weight: 1}).addTo(map);

var line3 = [bgp_levelone06_coord, bgp_levelone07_coord]
L.polyline(line3, {color: 'blue', weight: 1}).addTo(map);

var line4 = [bgp_levelone06_coord, bgp_levelone08_coord]
L.polyline(line4, {color: 'blue', weight: 1}).addTo(map);

var line5 = [bgp_levelone07_coord, bgp_levelone08_coord]
L.polyline(line5, {color: 'blue', weight: 1}).addTo(map);

var line6 = [bgp_levelone08_coord, bgp_pacman04_coord]
L.polyline(line6, {color: 'blue', weight: 1}).addTo(map);

var line7 = [bgp_levelone10_coord, bgp_levelone05_coord]
L.polyline(line7, {color: 'blue', weight: 1}).addTo(map);

var line8 = [bgp_levelone12_coord, bgp_levelone14_coord]
L.polyline(line8, {color: 'blue', weight: 1}).addTo(map);

var line9 = [bgp_levelone14_coord, legacy_coord]
L.polyline(line9, {color: 'blue', weight: 1}).addTo(map);

var line10 = [bgp_tp08_coord, bgp_tp09_coord]
L.polyline(line10, {color: 'blue', weight: 1}).addTo(map);

var line11 = [bgp_tp09_coord, bgp_tp12_coord]
L.polyline(line11, {color: 'blue', weight: 1}).addTo(map);

var line12 = [bgp_tp09_coord, bgp_tp11_coord]
L.polyline(line12, {color: 'blue', weight: 1}).addTo(map);

var line13 = [bgp_tp12_coord, bgp_tp11_coord]
L.polyline(line13, {color: 'blue', weight: 1}).addTo(map);

var line14 = [bgp_tp12_coord, bgp_tp14_coord]
L.polyline(line14, {color: 'blue', weight: 1}).addTo(map);

var line15 = [bgp_tp14_coord, bgp_tp16_coord]
L.polyline(line15, {color: 'blue', weight: 1}).addTo(map);

var line16 = [bgp_tp16_coord, bgp_tp17_coord]
L.polyline(line16, {color: 'blue', weight: 1}).addTo(map);

var line17 = [bgp_tp16_coord, bgp_tp19_coord]
L.polyline(line17, {color: 'blue', weight: 1}).addTo(map);

var line18 = [bgp_tp17_coord, bgp_tp19_coord]
L.polyline(line18, {color: 'blue', weight: 1}).addTo(map);

var line19 = [bgp_tp09_coord, bgp_levelone06_coord]
L.polyline(line19, {color: 'blue', weight: 1}).addTo(map);

var line20 = [bgp_tp14_coord, bgp_levelone07_coord]
L.polyline(line20, {color: 'blue', weight: 1}).addTo(map);

var line21 = [bgp_levelone12_coord, bgp_tp17_coord]
L.polyline(line21, {color: 'blue', weight: 1}).addTo(map);

var line22 = [bgp_toto01_coord, bgp_toto22_coord]
L.polyline(line22, {color: 'blue', weight: 1}).addTo(map);

var line23 = [bgp_toto01_coord, bgp_toto05_coord]
L.polyline(line23, {color: 'blue', weight: 1}).addTo(map);

var line24 = [bgp_toto05_coord, bgp_toto06_coord]
L.polyline(line24, {color: 'blue', weight: 1}).addTo(map);

var line25 = [bgp_toto05_coord, bgp_toto22_coord]
L.polyline(line25, {color: 'blue', weight: 1}).addTo(map);

var line26 = [bgp_toto06_coord, bgp_toto07_coord]
L.polyline(line26, {color: 'blue', weight: 1}).addTo(map);

var line27 = [bgp_toto07_coord, bgp_toto10_coord]
L.polyline(line27, {color: 'blue', weight: 1}).addTo(map);

var line28 = [bgp_toto09_coord, bgp_toto10_coord]
L.polyline(line28, {color: 'blue', weight: 1}).addTo(map);

var line29 = [bgp_toto09_coord, bgp_toto11_coord]
L.polyline(line29, {color: 'blue', weight: 1}).addTo(map);

var line30 = [bgp_toto10_coord, bgp_toto11_coord]
L.polyline(line30, {color: 'blue', weight: 1}).addTo(map);

var line31 = [bgp_toto10_coord, bgp_toto14_coord]
L.polyline(line31, {color: 'blue', weight: 1}).addTo(map);

var line32 = [bgp_toto11_coord, bgp_toto13_coord]
L.polyline(line32, {color: 'blue', weight: 1}).addTo(map);

var line33 = [bgp_toto11_coord, bgp_toto14_coord]
L.polyline(line33, {color: 'blue', weight: 1}).addTo(map);

var line34 = [bgp_toto13_coord, bgp_toto14_coord]
L.polyline(line34, {color: 'blue', weight: 1}).addTo(map);

var line35 = [bgp_toto13_coord, bgp_toto15_coord]
L.polyline(line35, {color: 'blue', weight: 1}).addTo(map);

var line36 = [bgp_toto14_coord, bgp_toto15_coord]
L.polyline(line36, {color: 'blue', weight: 1}).addTo(map);

var line37 = [bgp_toto22_coord, bgp_toto23_coord]
L.polyline(line37, {color: 'blue', weight: 1}).addTo(map);

var line38 = [bgp_toto23_coord, bgp_toto24_coord]
L.polyline(line38, {color: 'blue', weight: 1}).addTo(map);

var line39 = [bgp_toto24_coord, bgp_toto25_coord]
L.polyline(line39, {color: 'blue', weight: 1}).addTo(map);

var line40 = [bgp_toto25_coord, bgp_toto26_coord]
L.polyline(line40, {color: 'blue', weight: 1}).addTo(map);

var line41 = [bgp_toto26_coord, bgp_toto27_coord]
L.polyline(line41, {color: 'blue', weight: 1}).addTo(map);

var line42 = [bgp_toto27_coord, bgp_toto28_coord]
L.polyline(line42, {color: 'blue', weight: 1}).addTo(map);

var line43 = [bgp_toto28_coord, bgp_toto29_coord]
L.polyline(line43, {color: 'blue', weight: 1}).addTo(map);

var line44 = [bgp_toto28_coord, bgp_toto30_coord]
L.polyline(line44, {color: 'blue', weight: 1}).addTo(map);

var line45 = [bgp_toto29_coord, bgp_toto30_coord]
L.polyline(line45, {color: 'blue', weight: 1}).addTo(map);

var line46 = [bgp_tp19_coord, bgp_toto30_coord]
L.polyline(line46, {color: 'blue', weight: 1}).addTo(map);

var line47 = [bgp_rao01_coord, bgp_rao02_coord]
L.polyline(line47, {color: 'blue', weight: 1}).addTo(map);

var line48 = [bgp_rao02_coord, bgp_rao03_coord]
L.polyline(line48, {color: 'blue', weight: 1}).addTo(map);

var line49 = [bgp_rao03_coord, bgp_le06_coord]
L.polyline(line49, {color: 'blue', weight: 1}).addTo(map);

var line50 = [bgp_le01_coord, bgp_toto14_coord]
L.polyline(line50, {color: 'blue', weight: 1}).addTo(map);

var line51 = [bgp_le01_coord, bgp_le03_coord]
L.polyline(line51, {color: 'blue', weight: 1}).addTo(map);

var line52 = [bgp_le06_coord, bgp_le07_coord]
L.polyline(line52, {color: 'blue', weight: 1}).addTo(map);

var line53 = [bgp_le07_coord, bgp_le10_coord]
L.polyline(line53, {color: 'blue', weight: 1}).addTo(map);

var line54 = [bgp_le10_coord, bgp_toto13_coord]
L.polyline(line54, {color: 'blue', weight: 1}).addTo(map);

var line55 = [bgp_raclette01_coord, bgp_raclette02_coord]
L.polyline(line55, {color: 'blue', weight: 1}).addTo(map);

var line56 = [bgp_gruyere02_coord, bgp_raclette02_coord]
L.polyline(line56, {color: 'blue', weight: 1}).addTo(map);

var line57 = [bgp_gruyere01_coord, bgp_gruyere02_coord]
L.polyline(line57, {color: 'blue', weight: 1}).addTo(map);

var line58 = [bgp_gruyere02_coord, bgp_gruyere03_coord]
L.polyline(line58, {color: 'blue', weight: 1}).addTo(map);

var line59 = [bgp_gruyere03_coord, bgp_gruyere06_coord]
L.polyline(line59, {color: 'blue', weight: 1}).addTo(map);

var line60 = [bgp_gruyere06_coord, bgp_gruyere07_coord]
L.polyline(line60, {color: 'blue', weight: 1}).addTo(map);

var line61 = [bgp_sbrinz02_coord, bgp_gruyere07_coord]
L.polyline(line61, {color: 'blue', weight: 1}).addTo(map);

var line62 = [bgp_sbrinz02_coord, bgp_toto30_coord]
L.polyline(line62, {color: 'blue', weight: 1}).addTo(map);

var line63 = [bgp_sbrinz02_coord, bgp_tp19_coord]
L.polyline(line63, {color: 'blue', weight: 1}).addTo(map);

var line64 = [bgp_merica01_coord, bgp_merica02_coord]
L.polyline(line64, {color: 'blue', weight: 1}).addTo(map);

var line65 = [bgp_merica03_coord, bgp_merica04_coord]
L.polyline(line65, {color: 'blue', weight: 1}).addTo(map);

var line66 = [bgp_merica05_coord, bgp_merica06_coord]
L.polyline(line66, {color: 'blue', weight: 1}).addTo(map);

var line67 = [bgp_marathon02_coord, bgp_tp08_coord]
L.polyline(line67, {color: 'blue', weight: 1}).addTo(map);

var line68 = [bgp_marathon02_coord, bgp_merica06_coord]
L.polyline(line68, {color: 'blue', weight: 1}).addTo(map);

var line69 = [bgp_marathon03_coord, bgp_merica05_coord]
L.polyline(line69, {color: 'blue', weight: 1}).addTo(map);

var line70 = [bgp_marathon09_coord, bgp_tp12_coord]
L.polyline(line70, {color: 'blue', weight: 1}).addTo(map);

var line71 = [bgp_marathon09_coord, bgp_merica04_coord]
L.polyline(line71, {color: 'blue', weight: 1}).addTo(map);

var line72 = [bgp_marathon02_coord, bgp_marathon03_coord]
L.polyline(line72, {color: 'blue', weight: 1}).addTo(map);

var line73 = [bgp_marathon08_coord, bgp_marathon10_coord]
L.polyline(line73, {color: 'blue', weight: 1}).addTo(map);

var line74 = [bgp_marathon10_coord, bgp_merica02_coord]
L.polyline(line74, {color: 'blue', weight: 1}).addTo(map);

var line75 = [bgp_marathon10_coord, bgp_tp11_coord]
L.polyline(line75, {color: 'blue', weight: 1}).addTo(map);

var line76 = [bgp_concarne03_coord, bgp_ketchup11_coord]
L.polyline(line76, {color: 'blue', weight: 1}).addTo(map);

var line77 = [bgp_concarne01_coord, bgp_concarne02_coord]
L.polyline(line77, {color: 'blue', weight: 1}).addTo(map);

var line78 = [bgp_concarne02_coord, bgp_concarne03_coord]
L.polyline(line78, {color: 'blue', weight: 1}).addTo(map);

var line79 = [bgp_ketchup01_coord, bgp_levelone10_coord]
L.polyline(line79, {color: 'blue', weight: 1}).addTo(map);

var line80 = [bgp_ketchup01_coord, bgp_ketchup02_coord]
L.polyline(line80, {color: 'blue', weight: 1}).addTo(map);

var line81 = [bgp_ketchup02_coord, bgp_ketchup03_coord]
L.polyline(line81, {color: 'blue', weight: 1}).addTo(map);

var line82 = [bgp_ketchup03_coord, bgp_ketchup04_coord]
L.polyline(line82, {color: 'blue', weight: 1}).addTo(map);

var line83 = [bgp_ketchup04_coord, bgp_ketchup05_coord]
L.polyline(line83, {color: 'blue', weight: 1}).addTo(map);

var line84 = [bgp_ketchup05_coord, bgp_ketchup06_coord]
L.polyline(line84, {color: 'blue', weight: 1}).addTo(map);

var line85 = [bgp_ketchup06_coord, bgp_ketchup09_coord]
L.polyline(line85, {color: 'blue', weight: 1}).addTo(map);

var line86 = [bgp_ketchup06_coord, bgp_ketchup07_coord]
L.polyline(line86, {color: 'blue', weight: 1}).addTo(map);

var line87 = [bgp_ketchup07_coord, bgp_ketchup09_coord]
L.polyline(line87, {color: 'blue', weight: 1}).addTo(map);

var line88 = [bgp_ketchup09_coord, bgp_ketchup10_coord]
L.polyline(line88, {color: 'blue', weight: 1}).addTo(map);

var line89 = [bgp_ketchup10_coord, bgp_ketchup11_coord]
L.polyline(line89, {color: 'blue', weight: 1}).addTo(map);

var line90 = [bgp_auskev01_coord, bgp_auskev02_coord]
L.polyline(line90, {color: 'blue', weight: 1}).addTo(map);

var line91 = [bgp_auskev02_coord, bgp_flag01_coord]
L.polyline(line91, {color: 'blue', weight: 1}).addTo(map);

var line92 = [bgp_flag01_coord, bgp_toto29_coord]
L.polyline(line92, {color: 'blue', weight: 1}).addTo(map);

var line93 = [bgp_flag01_coord, bgp_flag02_coord]
L.polyline(line93, {color: 'blue', weight: 1}).addTo(map);

var line94 = [bgp_flag02_coord, bgp_flag09_coord]
L.polyline(line94, {color: 'blue', weight: 1}).addTo(map);

var line95 = [bgp_flag09_coord, bgp_tp20_coord]
L.polyline(line95, {color: 'blue', weight: 1}).addTo(map);

var line96 = [bgp_durka01_coord, bgp_durka02_coord]
L.polyline(line96, {color: 'blue', weight: 1}).addTo(map);

var line97 = [bgp_durka02_coord, bgp_durka03_coord]
L.polyline(line97, {color: 'blue', weight: 1}).addTo(map);

var line98 = [bgp_nlrail01_coord, bgp_durka03_coord]
L.polyline(line98, {color: 'blue', weight: 1}).addTo(map);

var line99 = [bgp_nlrail01_coord, bgp_toto22_coord]
L.polyline(line99, {color: 'blue', weight: 1}).addTo(map);

var line100 = [bgp_nlrail01_coord, bgp_nlrail02_coord]
L.polyline(line100, {color: 'blue', weight: 1}).addTo(map);

var line101 = [bgp_nlrail02_coord, bgp_nlrail03_coord]
L.polyline(line101, {color: 'blue', weight: 1}).addTo(map);

var line102 = [bgp_nlrail03_coord, bgp_nlrail04_coord]
L.polyline(line102, {color: 'blue', weight: 1}).addTo(map);

var line103 = [bgp_nlrail04_coord, bgp_nlrail05_coord]
L.polyline(line103, {color: 'blue', weight: 1}).addTo(map);

var line104 = [bgp_nlrail05_coord, bgp_nlrail06_coord]
L.polyline(line104, {color: 'blue', weight: 1}).addTo(map);

var line105 = [bgp_nlrail06_coord, bgp_toto25_coord]
L.polyline(line105, {color: 'blue', weight: 1}).addTo(map);

var line106 = [bgp_ggisp01_coord, bgp_ggisp02_coord]
L.polyline(line106, {color: 'blue', weight: 1}).addTo(map);

var line107 = [bgp_ggisp02_coord, bgp_ggisp03_coord]
L.polyline(line107, {color: 'blue', weight: 1}).addTo(map);

var line108 = [bgp_ggisp03_coord, bgp_ggs01_coord]
L.polyline(line108, {color: 'blue', weight: 1}).addTo(map);

var line109 = [bgp_ggs01_coord, bgp_toto15_coord]
L.polyline(line109, {color: 'blue', weight: 1}).addTo(map);
