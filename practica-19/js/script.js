// ========================================================
// 1. CAPTURAR ELEMENTOS DE TEXTO (Evitamos el selector universal puro)
// ========================================================

// En lugar de '*' puro, seleccionamos específicamente las etiquetas con contenido
// separándolas por coma dentro de querySelectorAll
let elementosDeTexto = document.querySelectorAll('h1, h2, h3, p, li');

// Recorremos la lista de elementos textolles con un forEach
elementosDeTexto.forEach(function(elemento) {
    
    // Agregamos el evento de escucha al hacer click
    elemento.addEventListener('click', function(event) {
        
        // Cambiamos el color de la tipografía a rojo
        event.target.style.color = "red";
        
        // FRENAR LA PROPAGACIÓN: Clave para que no se herede el click
        // hacia los elementos padres e interfiera con el diseño
        event.stopPropagation();
    });
});


// ========================================================
// 2. CASO ESPECIAL: LA IMAGEN (Desaparece al hacer click)
// ========================================================

// Seleccionamos la imagen
let imagen = document.querySelector('img');

if (imagen) {
    imagen.addEventListener('click', function(event) {
        // En vez de desaparecer, le damos un 30% de opacidad (70% transparente)
        imagen.style.opacity = "0.3"; 
        
        // Evitamos que el click afecte a los elementos de atrás
        event.stopPropagation();
    });
}