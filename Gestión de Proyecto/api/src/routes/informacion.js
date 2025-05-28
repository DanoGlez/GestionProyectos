const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const filePath = path.join(__dirname, "../../data/informacion.json");

// GET: obtener todos los datos
router.get("/", (req, res) => {
  const data = fs.readFileSync(filePath, "utf8");
  res.json(JSON.parse(data));
});

// POST: añadir un nuevo dato con ID autoincremental
router.post("/", (req, res) => {
  let datos = [];
  if (fs.existsSync(filePath)) {
    const contenido = fs.readFileSync(filePath, "utf8");
    if (contenido) datos = JSON.parse(contenido);
  }

  // Generar el siguiente ID automáticamente
  let nextId = 1;
  if (datos.length > 0) {
    nextId = Math.max(...datos.map((p) => p.ID || 0)) + 1;
  }

  const nuevaEntrada = {
    ID: nextId,
    Nombre: req.body.Nombre || "",
    Estimado: req.body.Estimado || 0,
    Real: req.body.Real || 0,
    Coste: req.body.Coste || 0,
    Observaciones: req.body.Observaciones || "",
    Fecha: req.body.Fecha || "",
  };

  datos.push(nuevaEntrada);
  fs.writeFileSync(filePath, JSON.stringify(datos, null, 2));
  res.status(201).json(nuevaEntrada);
});


// Eliminar un dato por ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Archivo no encontrado" });
  }

  const contenido = fs.readFileSync(filePath, "utf8");
  let datos = contenido ? JSON.parse(contenido) : [];

  const indice = datos.findIndex((item) => item.ID === id);
  if (indice === -1) {
    return res.status(404).json({ error: "Registro no encontrado" });
  }

  const eliminado = datos.splice(indice, 1)[0];
  fs.writeFileSync(filePath, JSON.stringify(datos, null, 2));
  res.json({ message: "Registro eliminado", data: eliminado });
});
module.exports = router;