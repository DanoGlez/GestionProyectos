# Gestión de Proyectos

Este proyecto es una aplicación web sencilla para gestionar proyectos, permitiendo registrar y consultar información básica de cada proyecto. Incluye un backend en Node.js/Express y un frontend en HTML, CSS y JavaScript.

---

## Estructura del Proyecto

```
GestionProyectos/
│
├── api/                # Backend (API REST)
│   ├── src/
│   │   ├── app.js
│   │   └── routes/
│   │       ├── informacion.js
│   │       └── index.js
│   ├── data/
│   │   └── informacion.json
│   └── package.json
│
├── web/                # Frontend
│   ├── index.html
│   ├── index.js
│   ├── styles.css
│   ├── registros/
│   │   ├── index.html
│   │   └── form.css
│   └── registros.js
│
└── README.md           # Este archivo
```

---

## Instalación y Ejecución

### 1. Backend (API)

1. **Instala las dependencias**  
   Abre una terminal en la carpeta `api` y ejecuta:
   ```
   npm install
   ```

2. **Crea el archivo de datos**  
   Asegúrate de que exista el archivo `api/data/informacion.json` con el siguiente contenido inicial:
   ```json
   []
   ```

3. **Inicia el servidor**  
   ```
   npm run dev
   ```
   El servidor escuchará en `http://localhost:3000`.

### 2. Frontend

No requiere instalación.  
Abre `web/index.html` en tu navegador para ver la tabla de proyectos.  
Abre `web/registros/index.html` para registrar un nuevo proyecto.

---

## Uso

### Registrar un Proyecto

1. Ve a `web/registros/index.html`.
2. Completa el formulario con los datos del proyecto.
3. Haz clic en "Guardar".  
   El proyecto se enviará a la API y se almacenará en el archivo JSON.

### Consultar Proyectos

1. Ve a `web/index.html`.
2. Se mostrará una tabla con todos los proyectos registrados.

---

## API REST

La API expone los siguientes endpoints:

### `GET /api/informacion`

- **Descripción:** Devuelve todos los proyectos registrados.
- **Respuesta:** Array de objetos proyecto.

### `POST /api/informacion`

- **Descripción:** Añade un nuevo proyecto.
- **Cuerpo esperado (JSON):**
  ```json
  {
    "Nombre": "Nombre del proyecto",
    "Estimado": 10,
    "Real": 12,
    "Coste": 100.00,
    "Observaciones": "Texto opcional",
    "Fecha": "2024-06-01"
  }
  ```
- **Respuesta:** Objeto del proyecto creado (incluye campo `ID` autogenerado).

---

## Detalle de Carpetas y Archivos

### Backend (`api/`)

- **`src/app.js`**: Configura y arranca el servidor Express, carga dinámicamente las rutas desde `src/routes/` y habilita CORS y JSON.
- **`src/routes/informacion.js`**: Expone los endpoints `/api/informacion` para obtener (GET) y registrar (POST) proyectos. El POST asigna un ID autoincremental y guarda los datos en `data/informacion.json`.
- **`data/informacion.json`**: Archivo donde se almacenan los proyectos en formato JSON. Ejemplo de contenido:

```json
[
  {
    "ID": 1,
    "Nombre": "App Móvil",
    "Estimado": 120,
    "Real": 135,
    "Coste": 20.5,
    "Observaciones": "Cambio de requisitos",
    "Fecha": "2025-06-01"
  }
]
```
- **`package.json`**: Define las dependencias (`express`, `cors`, `nodemon`) y los scripts para desarrollo y producción.

### Frontend (`web/`)

- **`index.html`**: Página principal. Muestra la tabla de proyectos y un enlace para registrar uno nuevo.
- **`index.js`**: Obtiene los proyectos desde la API y los muestra en la tabla.
- **`index.css`**: Estilos generales para la tabla y la página principal.
- **`registros/index.html`**: Formulario para registrar un nuevo proyecto. Incluye campos para nombre, tiempos, coste, observaciones y fecha.
- **`registros/registros.js`**: Captura los datos del formulario y los envía a la API usando `fetch` (POST). Calcula el coste como `Estimado * coste por hora`.
- **`registros/form.css`**: Estilos para el formulario de registro.

---

## Ejemplo Visual

### Tabla de proyectos (`web/index.html`)

| ID | Nombre        | Estimado | Real | Coste | Observaciones           | Fecha      |
|----|--------------|----------|------|-------|------------------------|------------|
| 1  | App Móvil    | 120      | 135  | 20.5  | Cambio de requisitos   | 2025-06-01 |

### Formulario de registro (`web/registros/index.html`)

- **Nombre**: Texto
- **Tiempo estimado**: Número
- **Tiempo real**: Número
- **Coste**: Número (coste por hora)
- **Observaciones**: Texto
- **Fecha de entrega**: Fecha

---

## Ampliación y Personalización

- Puedes modificar los campos del formulario o la tabla editando los archivos HTML y JS correspondientes.
- Para cambiar la lógica de cálculo del coste, edita `web/registros/registros.js`.
- Los estilos pueden personalizarse en `index.css` y `registros/form.css`.
- Si deseas agregar validaciones o nuevos endpoints, modifica los archivos en `api/src/routes/`.

---

## Créditos y Licencia

Proyecto educativo. Puedes modificarlo libremente para tus prácticas o aprendizaje.

---

## Contacto

Para dudas o mejoras, contacta al autor o abre un issue en el repositorio correspondiente.
