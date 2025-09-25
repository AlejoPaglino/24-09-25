

let app = express();letAPI_URL = 'https://api.football-data.org/v4/matches';
let API_URL = "https://api.football-data.org/v4/matches";
let API_TOKEN = "4f85f68caa7b4559bb4f73baf0a076ed"; // ⚠️ Reemplazá esto con tu token real
let Partidos = document.querySelector(`#Partidos`)
let matchList = document.querySelector(`#matchList`)
// 1. Función para obtener los datos de la API
function obtenerPartidos() {
  fetch(API_URL, {
    headers: {
      "X-Auth-Token": API_TOKEN
    }
  })
    .then(response => response.json())
    .then(data => mostrarPartidos(data.matches)) // llamamos a otra función
    .catch(error => console.error("Error al obtener los partidos:", error));
}

// 2. Función para mostrar los partidos en el DOM
function mostrarPartidos(partidos) {
  const lista = document.getElementById("matchList");
  lista.innerHTML = ""; // limpiar lista anterior

  // 3. Recorremos el arreglo con un bucle
  for (let partido of partidos) {
    const item = document.createElement("li");
   
    let local = partido.homeTeam.name;
    let visitante = partido.awayTeam.name;
    let estado = partido.status;
    let hora = new Date(partido.utcDate).toLocaleTimeString();

    // 4. Agregamos datos al DOM
    item.textContent = `${local} vs ${visitante} - ${estado} - ${hora}`;
    lista.appendChild(item);
  }
}

// 5. Llamamos a la función
obtenerPartidos();

