// ==========================================
// PRÁCTICA 18: TODO CAMBIADO 🧙‍♂️
// ==========================================

// PASO 1: Capturar los elementos del DOM que queremos modificar
// Usamos las clases que definimos en el archivo HTML
let titulo = document.querySelector('.titulo-principal');
let primerParrafo = document.querySelector('.parrafo-uno');
let segundoParrafo = document.querySelector('.parrafo-dos');

// PASO 2: Lanzar la alerta del sistema
// El navegador frena la ejecución acá y espera que el usuario interactúe
alert('Al aceptar cambiar todo');

// PASO 3: Modificaciones (se ejecutan inmediatamente después de tocar "Aceptar")

// A) Cambiamos los contenidos de texto con .innerText
titulo.innerText = "¡Texto Transformado! 🎉";
primerParrafo.innerText = "Este párrafo cambió por completo gracias al poder de la manipulación del DOM.";
segundoParrafo.innerText = "Y el segundo párrafo tampoco se quedó atrás. ¡Todo modificado con JS!";

// B) Cambiamos los estilos utilizando la propiedad .style
// Recordá la regla de la cátedra: las propiedades CSS con guion pasan a camelCase (ej: font-size -> fontSize)
titulo.style.color = "#e63946";        // Cambia el color del título a rojo/coral
titulo.style.fontSize = "3em";          // Aumenta el tamaño del título

primerParrafo.style.color = "#1d3557";  // Cambia el color del primer párrafo a azul oscuro
primerParrafo.style.fontWeight = "bold"; // Pone el texto en negrita

segundoParrafo.style.color = "#457b9d"; // Cambia el color del segundo párrafo a azul claro
segundoParrafo.style.fontStyle = "italic"; // Pone el texto en cursiva

document.body.style.backgroundColor = "#1d3557"; // Cambia el fondo general a azul oscuro