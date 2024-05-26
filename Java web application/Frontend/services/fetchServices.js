const datos={
        document:{
          type:"PLAIN_TEXT",
          content:"Darth Vader es el mejor personaje de Star Wars."
        },
        encodingType: "UTF8"
}

    const apiKey = 'AIzaSyBh46hyuHbR_3nqurpIqZdFxl7CMNmX4v8';

    // URL del endpoint
    const url = 'http://localhost:8080/api/saludo';
const opciones = {
  method: 'GET', // Método HTTP
  headers: {
    'Content-Type': 'application/json', // Especificamos que estamos enviando JSON
  },
  mode: 'cors',
};

// Realizar la solicitud POST
export const analizame=()=>{fetch(url, opciones)
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${respuesta.status} - ${respuesta.statusText}`);
    }
    // Convertimos la respuesta a JSON para analizarla
    return respuesta;
  })
  .then((datos) => {
    console.log('Respuesta del servidor:', datos); // Muestra la respuesta de la API
  })
  .catch((error) => {
    console.error('Error al realizar la solicitud:', error); // Manejo de errores
  });}
