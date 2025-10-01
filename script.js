let fotos = document.querySelector('#fotos')
let titulo = document.querySelector('#titulo')
let Partidos = document.querySelector(`#Partidos`)
let dia = document.querySelector(`#dia`)
let matchList = document.querySelector(`#matchList`)
console.log('hola')
fetch('https://api.football-data.org/v4/competitions/CL/matches?api_key=4f85f68caa7b4559bb4f73baf0a076ed&count=1')
  .then(res => res.json())
  .then(datos => {
    fotos.src = datos[0].url
    titulo.textContent = datos[0].title
    Partidos.textContent = datos[0].date
    dia.textContent = datos[0].date
    matchList.textContent = datos[0].date
    console.log(datos)
  })



 