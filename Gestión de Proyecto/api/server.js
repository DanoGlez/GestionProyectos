router.post('/guardar', (req, res) => {
  // Leer datos existentes
  let datos = [];
  if (fs.existsSync(DATA_FILE)) {
    const contenido = fs.readFileSync(DATA_FILE, 'utf8');
    if (contenido) datos = JSON.parse(contenido);
  }

  // Generar el siguiente ID automáticamente
  let nextId = 1;
  if (datos.length > 0) {
    nextId = Math.max(...datos.map(p => p.ID || 0)) + 1;
  }

  // Construir el objeto en el orden deseado
  const nuevaInfo = {
    ID: nextId,
    Nombre: req.body.Nombre || "",
    Estimado: req.body.Estimado || 0,
    Real: req.body.Real || 0,
    Coste: req.body.Coste || 0,
    Observaciones: req.body.Observaciones || "",
    Fecha: req.body.Fecha || ""
  };

  // Agregar nueva información
  datos.push(nuevaInfo);

  // Guardar en el archivo JSON
  fs.writeFileSync(DATA_FILE, JSON.stringify(datos, null, 2));

  res.status(201).json({ mensaje: 'Información guardada correctamente' });
});