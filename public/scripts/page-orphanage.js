const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

// create map
const map = L.map('mapid', options).setView([-9.6210271,-35.7200828], 15);

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



// creat and add marker
L.marker([-9.6210271,-35.7200828], { icon })
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