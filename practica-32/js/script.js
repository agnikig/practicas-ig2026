function jugar() {
    // 1. Sortear número (1 a 100)
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 10;
    let adivinado = false;
    let cajaResultado = document.querySelector("#resultado");

    // 2. Bucle principal del juego (mientras queden intentos y no adivine)
    while (intentos > 0 && adivinado === false) {
        let intentoUsuario = prompt("Quedan " + intentos + " intentos. Ingresa un número:");
        let numeroUsuario = Number(intentoUsuario);

        if (isNaN(numeroUsuario)) {
            alert("Por favor, ingresá un número válido.");
            continue; // Salta esta vuelta si no es número
        }

        if (numeroUsuario === numeroSecreto) {
            adivinado = true;
            cajaResultado.innerHTML = "¡Ganaste! El número era " + numeroSecreto;
        } else {
            intentos--; // Restamos un intento
            if (numeroUsuario < numeroSecreto) {
                alert("El número secreto es MAYOR.");
            } else {
                alert("El número secreto es MENOR.");
            }
        }
    }

    // 3. Si se acabaron los intentos
    if (adivinado === false) {
        cajaResultado.innerHTML = "Perdiste. El número era: " + numeroSecreto;
    }
}

document.querySelector("#btn-jugar").addEventListener("click", jugar);

/*
===================================================================
DECLARACIÓN DE USO DE IA (Práctica 32)
¿Qué se consultó?: Se solicitó la estructura algorítmica para implementar un juego de adivinanza con límite de intentos y lógica de mayor/menor.
¿Qué sugerencia se utilizó?: Se utilizó la sugerencia de emplear un bucle 'while' que controla dos condiciones simultáneamente (intentos > 0 y adivinado == false), lo cual es más eficiente que múltiples if anidados. Se empleó la instrucción 'break' o cambios de bandera (flag) para finalizar el juego.
¿Qué se descartó?: No se utilizó código generado automáticamente, siendo la lógica de comparación y el manejo de mensajes de alerta escritos manualmente para asegurar coherencia con los temas de la Clase 09.
===================================================================
*/