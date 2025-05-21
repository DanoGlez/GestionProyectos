# API REST Hello World

Este es un proyecto sencillo de API REST en JavaScript que responde a solicitudes HTTP.

## Estructura del Proyecto

```
api-rest-hello-world
├── src
│   ├── app.js        # Punto de entrada de la aplicación
│   └── routes        # Carpeta con las rutas/endpoints de la API
├── package.json      # Archivo de configuración de npm
└── README.md         # Documentación del proyecto
```

## Instalación

1. Clona el repositorio o descarga los archivos.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```
npm start
```
o en modo desarrollo (con recarga automática):
```
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.

## ¿Cómo funciona la API?

- La API utiliza Express.js y carga automáticamente todas las rutas que se encuentren en la carpeta `src/routes`.
- Cada archivo `.js` dentro de `src/routes` define uno o varios endpoints.
- Por ejemplo, el archivo `src/routes/test.js` crea la ruta `/api/test/hello`.

### Ejemplo de uso

#### Obtener saludo de prueba

- **Método:** GET
- **URL:** `http://localhost:3000/api/test/hello`
- **Respuesta esperada:**  
  ```
  Hello, world!
  ```

Puedes probarlo desde el navegador o usando herramientas como [Postman](https://www.postman.com/) o `curl`:

```sh
curl http://localhost:3000/api/test/hello
```

## ¿Cómo agregar nuevas rutas?

1. Crea un nuevo archivo en `src/routes`, por ejemplo, `src/routes/proyectos.js`.
2. Define tus endpoints usando Express Router.
3. La ruta estará disponible automáticamente en `/api/nombre-del-archivo`.

Ejemplo básico de ruta:

```js
// src/routes/proyectos.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, nombre: "Proyecto de ejemplo" }]);
});

module.exports = router;
```

Esto estará disponible en:  
`http://localhost:3000/api/proyectos/`

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o un pull request.