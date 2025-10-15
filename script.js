let fotos = document.querySelector('#fotos')
let titulo = document.querySelector('#titulo')
let animales = document.querySelector('#animales')
let listaDeAnimales = document.querySelector('#listaDeAnimales')

console.log('hola')

animales.addEventListener('click', function() {
    fetch('https://extinct-api.herokuapp.com/api/v1/animal/')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(info => {
       
        let animalAleatorio = info.data[0];
        console.log('Animal aleatorio:', animalAleatorio);
        fotos.src = animalAleatorio.imageSrc;//muestra la imagen en el html
        fotos.alt = animalAleatorio.commonName;// esto muestra el nombre
        titulo.textContent = animalAleatorio.commonName;
        
       let nuevoItem = document.createElement('ul');// crea nueva linea en la lista
        nuevoItem.textContent = `${animalAleatorio.commonName} - ${animalAleatorio.location} (${animalAleatorio.lastRecord})`;//muestra valores en pantalla
        listaDeAnimales = (nuevoItem);//asignar un valor
        
    })
    .catch(error => {
        console.error("Error al hacer la petición:", error);
        alert('Error al cargar el animal. Intenta nuevamente.');
    });
});
