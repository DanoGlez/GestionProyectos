const express = require('express');
const cors = require('cors');
const rutas = require('./server');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', rutas);

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});