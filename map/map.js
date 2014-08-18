var map = L.map('map', {
    minZoom: 2,
    maxZoom: 10
});

L.tileLayer('http://tile.openstreetmap.nl/osm/{z}/{x}/{y}.png', {
    tileSize: 256,
}).addTo(map);

map.fitWorld();

var routerIcon = L.icon({
    iconUrl: 'router.png',
    iconSize: [18, 18],
});

var tier0Icon = L.icon({
    iconUrl: 'tier0.png',
    iconSize: [26, 17],
});

var tier1Icon = L.icon({
    iconUrl: 'tier1.png',
    iconSize: [18, 18],
});

var tier2Icon = L.icon({
    iconUrl: 'tier2.png',
    iconSize: [18, 18],
});

var tier3Icon = L.icon({
    iconUrl: 'tier3.png',
    iconSize: [18, 18],
});
