let fotos = document.querySelector('#fotos')
let titulo = document.querySelector('#titulo')
let Partidos = document.querySelector(`#Partidos`)
let dia = document.querySelector(`#dia`)
let matchList = document.querySelector(`#matchList`)
console.log('hola')
fetch('https://api.football-data.org/v4/competitions/CL/matches?api_key=0d41dcdd794a4e469cf82d9b363389e8&count=1')
  .then(res => res.json(''))
  .then(datos => {
    fotos.src = datos[0].url
    titulo.textContent = datos[0].title
    Partidos.textContent = datos[0].date
    dia.textContent = datos[0].date
    matchList.textContent = datos[0].date
    console.log(datos)
  })



 