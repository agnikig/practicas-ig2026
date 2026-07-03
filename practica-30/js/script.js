// Variable para guardar el número elegido por el usuario
let numeroElegido = 0;

// Seleccionamos todos los botones de apuesta
let botones = document.querySelectorAll(".btn-numero");

// Asignamos el evento a cada botón usando un bucle FOR
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
        numeroElegido = Number(this.innerText);
        lanzarDados(); // Lanzamos los dados automáticamente al elegir
    });
}

function lanzarDados() {
    let resultados = []; // Array donde guardaremos los 5 dados sorteados
    let contenedor = document.querySelector("#contenedor-dados");
    contenedor.innerHTML = ""; // Limpiamos dados anteriores
    let aciertos = 0;

    // Bucle para tirar 5 dados (Clase 09)
    for (let i = 0; i < 5; i++) {
        let dado = Math.floor(Math.random() * 6) + 1;
        resultados.push(dado); // Guardamos el resultado en el Array
        
        // Creamos la etiqueta img
        let img = document.createElement("img");
        img.src = "img/" + dado + ".png";
        
        // CONDICIÓN: Si coincide, le aplicamos una clase CSS para resaltar (Punto 2)
        if (dado === numeroElegido) {
            img.classList.add("coincide");
            aciertos++;
        }
        
        contenedor.appendChild(img);
    }

    // Mostrar mensaje de cuántos coinciden (Punto 3)
    document.querySelector("#mensaje-resultado").innerText = "Coincidencias: " + aciertos;
}