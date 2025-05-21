document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnGuardar");

  btn.addEventListener("click", () => {
    const nombre = document.getElementById("Nombre").value;
    const estimado = parseFloat(document.getElementById("Estimado").value) || 0;
    const real = parseFloat(document.getElementById("Real").value) || 0;
    const costeHora = parseFloat(document.getElementById("coste").value) || 0;
    const observaciones = document.getElementById("Observaciones").value;
    const fecha = document.getElementById("Fecha").value;

    const nuevoProyecto = {
      Nombre: nombre,
      Estimado: estimado,
      Real: real,
      Coste: (estimado * costeHora).toFixed(2), // Cambiado a estimado * costeHora
      Observaciones: observaciones,
      Fecha: fecha
    };

    fetch('http://localhost:3000/api/guardar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoProyecto)
    })
      .then(response => response.json())
      .then(data => {
        console.log(" Proyecto guardado en API:", data);
        alert(" Proyecto guardado correctamente");
      })
      .catch(error => {
        console.error(" Error al guardar proyecto:", error);
      });

  });
<<<<<<<< HEAD:Gestión de Proyecto/web/registros.js
});
========
});
>>>>>>>> origin/master:web/registros.js
