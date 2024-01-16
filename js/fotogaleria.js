/* fetch('../imagenes.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error al cargar el archivo JSON', error));




  // Supongamos que tienes un contenedor con el id "galeria" en tu HTML
const galeriaContainer = document.getElementById('galeria');

// Iterar sobre las entradas del archivo JSON y agregar imágenes al contenedor
data.forEach(imagen => {
  const imgElement = document.createElement('img');
  imgElement.src = imagen.ruta;
  imgElement.alt = imagen.nombre;

  // Puedes agregar más información si es necesario (título, descripción, etc.)
  const captionElement = document.createElement('p');
  captionElement.textContent = imagen.descripcion;

  // Agregar la imagen y la información al contenedor
  galeriaContainer.appendChild(imgElement);
  galeriaContainer.appendChild(captionElement);
}); */

const galeriaContainer = document.getElementById('galeria');

fetch('../imagenes.json')
  .then(response => response.json())
    .then(data => {

    const imagenes = data;
    imagenes.forEach(imagen => {

      const divElement = document.createElement('div');
      divElement.classList = 'box'


      const imgElement = document.createElement('img');
      imgElement.src = imagen.ruta;
      imgElement.classList = '';
   

      divElement.appendChild(imgElement);
      galeriaContainer.appendChild(divElement);

    })
      .catch(error => console.error('Error al cargar el archivo JSON', error));

  });


