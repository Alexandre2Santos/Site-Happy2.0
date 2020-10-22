// create map
const map = L.map('mapid').setView([-9.6210271,-35.7200828], 15);

// create and add titleLayer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleGFuZHJlMnNhbnRvcyIsImEiOiJja2diOWgwNHkwZXNoMnNxcWM5NTIyNjJ2In0.tdomiLMs3VaeJLyiQO1bDg'
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})
//create and add popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minwidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg > </a>')


// creat and add marker
L.marker([-9.6210271,-35.7200828], { icon })
.addTo(map)
.bindPopup(popup)
    