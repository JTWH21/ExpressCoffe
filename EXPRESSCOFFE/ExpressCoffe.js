// Importar Express.js
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir una ruta para manejar peticiones GET a la ruta raíz "/"
app.get('/', (req, res) => {
  // Enviar una respuesta con el mensaje "Hola, mundo!"
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('La aplicación está escuchando en el puerto 3000!');
});
