// Objeto que define las configuraciones de estilo
let configuracionModo = {
    oscuro: {
        fondo: "#1a0000",
        texto: "#ffffff",
        borde: "#ffffff"
    },
    industrial: {
        fondo: "#4b4a4a",
        texto: "#130202",
        borde: "#130202"
    }
};

// Evento: Cambiar estilos al hacer clic
document.querySelector("#btn-cambiar-estilo").addEventListener("click", function() {
    let body = document.body;
    let contenedor = document.querySelector("#contenedor");

    // Lógica condicional simple (Clase 08)
    if (body.style.backgroundColor === "rgb(26, 0, 0)") {
        // Volver a Industrial
        body.style.backgroundColor = configuracionModo.industrial.fondo;
        contenedor.style.borderColor = configuracionModo.industrial.borde;
    } else {
        // Aplicar modo Oscuro
        body.style.backgroundColor = configuracionModo.oscuro.fondo;
        contenedor.style.borderColor = configuracionModo.oscuro.borde;
    }
});