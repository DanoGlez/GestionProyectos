document.addEventListener("DOMContentLoaded", () => {
    const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
    const tabla = document.getElementById("tabla-proyectos");

    proyectos.forEach(proyecto => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
      <td>${proyecto.ID}</td>
      <td>${proyecto.Nombre}</td>
      <td>${proyecto.Estimado}</td>
      <td>${proyecto.Real}</td>
      <td>${proyecto.Coste}</td>
      <td>${proyecto.Observaciones}</td>
      <td>${proyecto.Fecha}</td>
    `;
        tabla.appendChild(fila);
    });
});
