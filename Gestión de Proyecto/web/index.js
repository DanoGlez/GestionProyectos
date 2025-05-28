const API_URL = "http://localhost:3000/api/informacion";

document.addEventListener("DOMContentLoaded", () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const table = document.querySelector("table");
      data.forEach((proyecto, idx) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${idx + 1}</td>
          <td>${proyecto.Nombre || ""}</td>
          <td>${proyecto.Estimado || ""}</td>
          <td>${proyecto.Real || ""}</td>
          <td>${proyecto.Coste || ""}</td>
          <td>${proyecto.Observaciones || ""}</td>
          <td>${proyecto.Fecha || ""}</td>
        `;
        table.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
});

async function obtenerProyectos() {
  const response = await fetch(API_URL);
  return await response.json();
}

function renderizarProyectos(proyectos) {
  const table = document.querySelector("table");
  proyectos.forEach((proyecto, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${idx + 1}</td>
      <td>${proyecto.Nombre || ""}</td>
      <td>${proyecto.Estimado || ""}</td>
      <td>${proyecto.Real || ""}</td>
      <td>${proyecto.Coste || ""}</td>
      <td>${proyecto.Observaciones || ""}</td>
      <td>${proyecto.Fecha || ""}</td>
    `;
    table.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const proyectos = await obtenerProyectos();
    renderizarProyectos(proyectos);
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
});