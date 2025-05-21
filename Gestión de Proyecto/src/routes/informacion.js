const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../../data/informacion.json');

// GET
router.get('/informacion', (req, res) => {
  const data = fs.readFileSync(filePath, 'utf8');
  res.json(JSON.parse(data));
});

// POST
router.post('/informacion', (req, res) => {
  const nuevaEntrada = req.body;
  const datos = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  datos.push(nuevaEntrada);
  fs.writeFileSync(filePath, JSON.stringify(datos, null, 2));
  res.status(201).json(nuevaEntrada);
});

// DELETE
router.delete('/informacion/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let datos = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  datos = datos.filter(item => item.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(datos, null, 2));
  res.sendStatus(204);
});

module.exports = router;
