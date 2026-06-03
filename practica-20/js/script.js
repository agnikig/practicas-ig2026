// ========================================================
// PRÁCTICA 20: UNA CIUDAD INTERACTIVA / SITIO INTEGRADO 🌆
// ========================================================

// --------------------------------------------------------
// INTERACCIÓN 1: Botón de "Modo Lectura" (Cambio de Fondo y Texto)
// --------------------------------------------------------

// 1. Capturamos el botón del HTML (asegurate de agregar un id="btn-modo" en tu HTML si usás esta opción)
let botonModo = document.querySelector('#btn-modo');

// Verificamos que el elemento exista en la página actual para evitar errores en la consola
if (botonModo) {
    botonModo.addEventListener('click', function() {
        // Modificamos directamente los estilos del body usando JavaScript nativo
        document.body.style.backgroundColor = "#1b263b"; // Fondo azul oscuro profundo
        document.body.style.color = "#ffffff";           // Tipografía blanca para alto contraste
        
        // Cambiamos el texto interno del botón para avisar que ya se activó
        botonModo.innerText = "Modo Oscuro Activado 🌙";
    });
}


// --------------------------------------------------------
// INTERACCIÓN 2: Destacar títulos al hacer click (Uso de querySelectorAll y forEach)
// --------------------------------------------------------

// Capturamos todos los subtítulos h2 del sitio web
let subtitulos = document.querySelectorAll('h2');

// Al ser una lista de elementos (NodeList), los recorremos uno por uno
subtitulos.forEach(function(unSubtitulo) {
    
    unSubtitulo.addEventListener('click', function(event) {
        // Usamos event.target para aplicar el diseño únicamente al h2 exacto que clickeó el usuario
        event.target.style.color = "#4a7c59";             // Cambia a un tono verde destacado
        event.target.style.borderLeft = "5px solid #4a7c59"; // Agrega una barra lateral decorativa
        event.target.style.paddingLeft = "10px";          // Separa un poco el texto de la barra
        
        // Evitamos que el evento afecte a contenedores padres
        event.stopPropagation();
    });
});


// --------------------------------------------------------
// INTERACCIÓN 3: Cambiar opacidad de imágenes (Efecto translúcido al presionar)
// --------------------------------------------------------

// Seleccionamos las imágenes que forman parte del contenido de las prácticas 13/14
let imagenesSitio = document.querySelectorAll('main img');

imagenesSitio.forEach(function(foto) {
    
    foto.addEventListener('click', function(event) {
        // En lugar de ocultarla completamente, alteramos su opacidad como respuesta visual
        event.target.style.opacity = "0.5"; 
        
        event.stopPropagation();
    });
});