document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnGuardar");

  btn.addEventListener("click", () => {
    const nombre = document.getElementById("Nombre").value;
    const estimado = parseFloat(document.getElementById("Estimado").value) || 0;
    const real = parseFloat(document.getElementById("Real").value) || 0;
    const costeHora = parseFloat(document.getElementById("coste").value) || 0;
    const observaciones = document.getElementById("Observaciones").value;
    const fecha = document.getElementById("Fecha").value;

    const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    let nuevoID = 1;
    if (proyectos.length > 0) {
      const ids = proyectos.map(p => p.ID || 0);
      nuevoID = Math.max(...ids) + 1;
    }

    const nuevoProyecto = {
      ID: nuevoID,
      Nombre: nombre,
      Estimado: estimado,
      Real: real,
      Coste: (real * costeHora).toFixed(2),
      Observaciones: observaciones,
      Fecha: fecha
    };

    proyectos.push(nuevoProyecto);
    localStorage.setItem("proyectos", JSON.stringify(proyectos));

    alert("✅ Proyecto guardado correctamente");
    console.log("📦 Proyectos guardados:", proyectos);
  });
});

