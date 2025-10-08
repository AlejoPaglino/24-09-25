let fotos = document.querySelector('#fotos')
let titulo = document.querySelector('#titulo')
let animales = document.querySelector(`#animales`)
let dia = document.querySelector(`#dia`)
let listaDeAnimales = document.querySelector(`#listaDeAnimales`)
console.log('hola')
fetch('https://extinct-api.herokuapp.com/api/v1/animal/1')
  .then(res => res.json(''))
  .then(datos => {
    fotos.src = datos[0].url
    titulo.textContent = datos[0].title
    Partidos.textContent = datos[0].date
    dia.textContent = datos[0].date
    matchList.textContent = datos[0].date
    console.log(datos)
  })



 