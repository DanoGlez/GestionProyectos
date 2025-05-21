document.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/api/informacion')
    .then(response => response.json())
    .then(data => {
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
    .catch(error => {
      console.error("Error al cargar los datos:", error);
    });
});
