const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Carga dinámica de rutas
const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
  if (file.endsWith(".js")) {
    const route = require(path.join(routesPath, file));
    const routeName = `/api/${path.basename(file, ".js")}`;
    console.log(`Cargando ruta: ${routeName}`);
    app.use(routeName, route);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
