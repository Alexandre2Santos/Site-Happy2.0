const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}
//get value fron html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid', options).setView([lat, lng], 15);

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



// creat and add marker


L.marker([lat,lng], { icon })
.addTo(map)

/* image gallery */
function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
        buttons.forEach(removerActiveClass)

        function removerActiveClass(button) {
            button.classList.remove("active")

        }

    // seleionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container
    imageContainer.src = image.src

    //adicionar a classe .active para este botao
    button.classList.add('active')
}