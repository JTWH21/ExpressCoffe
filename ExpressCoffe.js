const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta para procesar la compra
app.post('/comprar', (req, res) => {
  // Aquí puedes implementar la lógica para procesar la compra
  res.send('<h2>¡Gracias por tu compra!</h2>');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
