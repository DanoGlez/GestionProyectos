const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const DATA_FILE = path.join(__dirname, './data/informacion.json');

// Ruta POST para recibir y guardar información
router.post('/guardar', (req, res) => {
  const nuevaInfo = req.body;

  // Leer datos existentes
  let datos = [];
  if (fs.existsSync(DATA_FILE)) {
    const contenido = fs.readFileSync(DATA_FILE, 'utf8');
    if (contenido) datos = JSON.parse(contenido);
  }

  // Agregar nueva información
  datos.push(nuevaInfo);

  // Guardar en el archivo JSON
  fs.writeFileSync(DATA_FILE, JSON.stringify(datos, null, 2));

  res.status(201).json({ mensaje: 'Información guardada correctamente' });
});

// Ruta GET para obtener la información guardada
router.get('/informacion', (req, res) => {
  let datos = [];
  if (fs.existsSync(DATA_FILE)) {
    const contenido = fs.readFileSync(DATA_FILE, 'utf8');
    if (contenido) datos = JSON.parse(contenido);
  }
  res.json(datos);
});

module.exports = router;