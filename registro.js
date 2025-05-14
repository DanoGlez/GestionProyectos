function incializar() {
    fetch("proyecto.json").then(response => response.json()).then(data => {
            const tabla = document.querySelector("table");
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
                tabla.appendChild(fila);
            });
    }).catch(error => {
        console.error("Error al cargar el archivo JSON:", error);
    });
}


document.addEventListener("DOMContentLoaded", incializar)

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