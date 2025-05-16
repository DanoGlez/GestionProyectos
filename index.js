function inicializar() {
  fetch("proyecto.json")
    .then(response => response.json())
    .then(data => {
      const tbody = document.getElementById("tabla-proyectos");
      document.getElementById("tablaProyectos").style.display = "table";

      data.forEach(proyecto => {
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
        tbody.appendChild(fila);
      });

      localStorage.setItem("proyectos", JSON.stringify(data));
    })
    .catch(error => {
      console.error("Error al cargar el archivo JSON:", error);
    });
}

document.addEventListener("DOMContentLoaded", inicializar);

document.addEventListener("DOMContentLoaded", () => {
  const btnCargarJSON = document.getElementById("btnCargarJSON");
  const formulario = document.getElementById("formularioNuevo");
  const btnGuardar = document.getElementById("btnGuardar");

  btnCargarJSON.addEventListener("click", () => {
    formulario.style.display = "block";
  });

  btnGuardar.addEventListener("click", () => {
    const nuevoProyecto = {
      ID: parseInt(document.getElementById("nuevoID").value),
      Nombre: document.getElementById("nuevoNombre").value,
      Estimado: parseInt(document.getElementById("nuevoEstimado").value),
      Real: parseInt(document.getElementById("nuevoReal").value),
      Coste: parseFloat(document.getElementById("nuevoCoste").value),
      Observaciones: document.getElementById("nuevoObservaciones").value,
      Fecha: document.getElementById("nuevaFecha").value
    };

    // Añadir fila a tbody
    const tbody = document.getElementById("tabla-proyectos");
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${nuevoProyecto.ID}</td>
      <td>${nuevoProyecto.Nombre}</td>
      <td>${nuevoProyecto.Estimado}</td>
      <td>${nuevoProyecto.Real}</td>
      <td>${nuevoProyecto.Coste}</td>
      <td>${nuevoProyecto.Observaciones}</td>
      <td>${nuevoProyecto.Fecha}</td>
    `;
    tbody.appendChild(fila);

    // Mostrar tabla
    document.getElementById("tablaProyectos").style.display = "table";

    // Guardar en localStorage
    const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
    proyectos.push(nuevoProyecto);
    localStorage.setItem("proyectos", JSON.stringify(proyectos));

    formulario.style.display = "none";
    formulario.querySelectorAll("input").forEach(input => input.value = "");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const btnGuardar = document.getElementById("btnGuardar");

  btnGuardar.addEventListener("click", () => {
    const nuevoProyecto = {
      ID: parseInt(document.getElementById("nuevoID").value),
      Nombre: document.getElementById("nuevoNombre").value,
      Estimado: parseInt(document.getElementById("nuevoEstimado").value),
      Real: parseInt(document.getElementById("nuevoReal").value),
      Coste: parseFloat(document.getElementById("nuevoCoste").value),
      Observaciones: document.getElementById("nuevoObservaciones").value,
      Fecha: document.getElementById("nuevaFecha").value
    };

    // Guardar en localStorage
    const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
    proyectos.push(nuevoProyecto);
    localStorage.setItem("proyectos", JSON.stringify(proyectos));

    // Redirigir a la otra página
    window.location.href = "registros.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const btnCargarJSON = document.getElementById("btnCargarJSON");
  const formulario = document.getElementById("formularioNuevo");
  const btnGuardar = document.getElementById("btnGuardar");

  btnCargarJSON.addEventListener("click", () => {
    formulario.style.display = "block";
  });

  btnGuardar.addEventListener("click", () => {
    const nuevoProyecto = {
      ID: parseInt(document.getElementById("nuevoID").value),
      Nombre: document.getElementById("nuevoNombre").value,
      Estimado: parseInt(document.getElementById("nuevoEstimado").value),
      Real: parseInt(document.getElementById("nuevoReal").value),
      Coste: parseFloat(document.getElementById("nuevoCoste").value),
      Observaciones: document.getElementById("nuevoObservaciones").value,
      Fecha: document.getElementById("nuevaFecha").value
    };

    // Guardar en localStorage
    const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
    proyectos.push(nuevoProyecto);
    localStorage.setItem("proyectos", JSON.stringify(proyectos));

    // Redirigir a registros.html
    window.location.href = "registros.html";
  });
});


// Producto;Precio;Marca;Vendedor
// Camara;10,4;Cannon;Corte Inglés
// Cannon;10,4;Camara;Corte Inglés

/*
{
    {
    "Producto": "Camara",
    "Precio": 10.4,
    "Marca": "Cannon",
    "Vendedor": "Corte Inglés"
    },
    {
    "Producto": "Camara",
    "Precio": 10.4,
    "Marca": "Cannon",
    "Vendedor": "Corte Inglés"
    }
}
*/