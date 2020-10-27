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
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})
function addMarker({id, name, lat, lng}) {

    //create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minwidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg > </a>`)


// creat and add marker
L.marker([lat, lng], { icon })
.addTo(map)
.bindPopup(popup)


}

const orphanagesSpan= document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span =>{
const orphanage = {
id: span.dataset.id,
name: span.dataset.name,
lat: span.dataset.lat,
lng: span.dataset.lng

}
addMarker(orphanage)
})

    