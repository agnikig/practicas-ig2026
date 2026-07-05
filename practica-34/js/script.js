// 1. Array de objetos con las obras (Clase 10)
let obras = [
    {titulo: "Obra 1", url: "img/1.jpg"},
    {titulo: "Obra 2", url: "img/2.jpg"},
    {titulo: "Obra 3", url: "img/3.jpg"},
    {titulo: "Obra 4", url: "img/4.jpg"},
    {titulo: "Obra 5", url: "img/5.jpg"},
    {titulo: "Obra 6", url: "img/6.jpg"},
    {titulo: "Obra 7", url: "img/7.jpg"},
    {titulo: "Obra 8", url: "img/8.jpg"},
    {titulo: "Obra 9", url: "img/9.jpg"},
    {titulo: "Obra 10", url: "img/10.jpg"}
];

let limite = 5; // Variable para controlar cuántas mostrar

// 2. Función para renderizar la galería (Clase 07/09)
function renderizar() {
    let contenedor = document.querySelector("#galeria");
    contenedor.innerHTML = ""; // Limpiar antes de volver a dibujar

    // Bucle para mostrar obras hasta el límite (Clase 09)
    for (let i = 0; i < limite && i < obras.length; i++) {
        let div = document.createElement("div");
        div.className = "obra";
        div.innerHTML = "<img src='" + obras[i].url + "' alt='" + obras[i].titulo + "'><h3>" + obras[i].titulo + "</h3>";
        contenedor.appendChild(div);
    }
}

// 3. Botón para sumar más imágenes
document.querySelector("#btn-mas").addEventListener("click", function() {
    if (limite < obras.length) {
        limite = limite + 5;
        renderizar();
    } else {        
        alert("¡No hay más obras para mostrar!");
    }
});

// Renderizado inicial
renderizar();

/*
===================================================================
DECLARACIÓN DE USO DE IA
¿Qué se consultó?: Cómo estructurar un array de objetos para una galería y cómo configurar un layout con Flexbox que sea adaptable.
¿Qué sugerencia se utilizó?: La estructura de array de objetos {titulo, url} y el uso de 'flex-wrap: wrap' en CSS para el layout adaptable.
¿Qué se descartó?: Métodos de manipulación de DOM avanzados (como .map() o plantillas literales), priorizando createElement y bucles for, tal como fue solicitado para alinearse con los contenidos vistos.
===================================================================
*/