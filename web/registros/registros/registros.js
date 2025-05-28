document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnGuardar");
  const API_URL = "http://localhost:3000/api/informacion";

  function obtenerDatosFormulario() {
    const nombre = document.getElementById("Nombre").value;
    const estimado = parseFloat(document.getElementById("Estimado").value) || 0;
    const real = parseFloat(document.getElementById("Real").value) || 0;
    const costeHora = parseFloat(document.getElementById("coste").value) || 0;
    const observaciones = document.getElementById("Observaciones").value;
    const fecha = document.getElementById("Fecha").value;

    return {
      Nombre: nombre,
      Estimado: estimado,
      Real: real,
      Coste: (estimado * costeHora).toFixed(2),
      Observaciones: observaciones,
      Fecha: fecha,
    };
  }

  async function guardarProyecto(proyecto) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proyecto),
    });
    return await response.json();
  }

  btn.addEventListener("click", async () => {
    const nuevoProyecto = obtenerDatosFormulario();
    try {
      await guardarProyecto(nuevoProyecto);
      // alert("Proyecto guardado correctamente");
    } catch (error) {
      console.error("Error al guardar proyecto:", error);
    }
  });
});