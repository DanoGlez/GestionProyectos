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

## Personalización

- Si cambias la URL o el puerto de la API, modifica la constante `API_URL` en los archivos JS del frontend.
- Los estilos pueden personalizarse editando `styles.css` y `registros/form.css`.

---

## Notas

- El backend guarda los datos en un archivo JSON local (`api/data/informacion.json`).
- No hay autenticación ni control de usuarios.
- El proyecto es solo para fines educativos y no debe usarse en producción sin mejoras de seguridad.

---

## Contacto

Para dudas o mejoras, contacta al autor o abre un issue en el repositorio correspondiente.
