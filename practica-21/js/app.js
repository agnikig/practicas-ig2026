let quierePersonalizar = confirm("¿Querés personalizar la bienvenida?");

if (quierePersonalizar === true) {
    let nombre = prompt("¿Cuál es tu nombre?", "Escribí tu nombre acá");
    let elementoBienvenida = document.querySelector("#mensaje-bienvenida");
    elementoBienvenida.innerHTML = "¡Hola " + nombre + "! Te damos la bienvenida.";
} else {
    let elementoBienvenida = document.querySelector("#mensaje-bienvenida");
    elementoBienvenida.innerHTML = "¡Hola! Te damos la bienvenida a nuestra página genérica.";
}

let quiereDarkMode = confirm("¿Querés leer las instrucciones en dark mode?");

if (quiereDarkMode === true) {
    let cajaInstrucciones = document.querySelector("#instrucciones-cafe");
    cajaInstrucciones.classList.add("modo-oscuro");
}

let momentoDelDia = prompt("¿Qué hora es? Escribí: mañana, tarde o noche");
let elementoDespedida = document.querySelector("#mensaje-despedida");

switch (momentoDelDia) {
    case "mañana":
        elementoDespedida.innerHTML = "¡Buenos días! Gracias por visitarnos.";
        break; 
    case "tarde":
        elementoDespedida.innerHTML = "¡Buenas tardes! Gracias por visitarnos.";
        break;
    case "noche":
        elementoDespedida.innerHTML = "¡Buenas noches! Gracias por visitarnos.";
        break;
    default:
        elementoDespedida.innerHTML = "¡Saludos! Gracias por visitarnos en este momento.";
        break;
}