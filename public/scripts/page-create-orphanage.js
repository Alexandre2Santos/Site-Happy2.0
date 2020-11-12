// create map
const map = L.map("mapid").setView([-9.6210271, -35.7200828], 15);

// create and add titleLayer
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiYWxleGFuZHJlMnNhbnRvcyIsImEiOiJja2diOWgwNHkwZXNoMnNxcWM5NTIyNjJ2In0.tdomiLMs3VaeJLyiQO1bDg",
  }
).addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});
let marker;

/* create and add marker*/
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add compo de fotos.
function addPhotoField() {
  // pegar container de fotos #images
  const container = document.querySelector('#images');
  //pegar o container para duplicar #.new-images
  const fieldsContainer = document.querySelectorAll('.new-upload');
  //realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está fazio se sim não adicionar
  const input = newFieldContainer.children[0];

  if (input.value == "") 
      return;

  // limpar o campo de imagens
  input.value = ""

  // //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}
  //select yes or not
  function toggleSelect(event) {

    //retirar a class .active(dos botões)
    document.querySelectorAll('.button-select button')
    .forEach( function(button){ 
      button.classList.remove('active')
    })
    //colocar a class.active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
  }

  function validate(event) {
    //validar se lat e lng estão preenchidos (falta fazer)

    const needsLatAndLng = false;
    if(needsLatAndLng) {
      event.preventDefault()
    alert('Preencha a localização selecionando no mapa!')
    }
    
  }