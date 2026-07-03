// -> Función encapsulada (Clase 08)
function organizarCena() {

    // 1. Declaramos los contadores para cada menú y los inicializamos en 0.
    // -> Contadores vistos en: Clase 09, Diapositiva 7.
    let contPasta = 0;
    let contPollo = 0;
    let contEnsalada = 0;

    // 2. Bucle FOR: Se va a repetir exactamente 12 veces (para los 12 invitados).
    // -> Estructura 'for' vista en: Clase 09, Diapositiva 6.
    for (let i = 1; i <= 12; i++) {
        
        let eleccion = prompt("Invitado " + i + ": ¿Qué menú elige? (pasta, pollo, ensalada)");
        
        // Pasamos el texto a minúsculas y sacamos espacios para que la validación sea más fácil
        eleccion = eleccion.toLowerCase().trim();

        // VALIDACIÓN CON WHILE
        // Mientras la elección NO sea pasta, Y NO sea pollo, Y NO sea ensalada...
        // -> Estructura 'while' vista en: Clase 09, Diapositiva 6.
        while (eleccion !== "pasta" && eleccion !== "pollo" && eleccion !== "ensalada") {
            eleccion = prompt("Opción inválida. Invitado " + i + ": Ingrese 'pasta', 'pollo' o 'ensalada'.");
            eleccion = eleccion.toLowerCase().trim();
        }

        // 3. Condicional para ir sumando al contador correspondiente
        // -> Condicionales vistos en: Clase 07 y 08.
        if (eleccion === "pasta") {
            contPasta = contPasta + 1; // Incrementamos el contador de pasta
        } else if (eleccion === "pollo") {
            contPollo = contPollo + 1; // Incrementamos el contador de pollo
        } else if (eleccion === "ensalada") {
            contEnsalada = contEnsalada + 1; // Incrementamos el contador de ensalada
        }
    } // FIN DEL BUCLE FOR

    // 4. Calcular porcentajes
    // (cantidad / total) * 100
    let porcPasta = (contPasta / 12) * 100;
    let porcPollo = (contPollo / 12) * 100;
    let porcEnsalada = (contEnsalada / 12) * 100;

    // 5. Determinar el menú más elegido
    // Usamos la misma lógica de "búsqueda del mayor" que usamos en prácticas anteriores
    let menuMasElegido = "Pasta";
    let cantidadMayor = contPasta;

    if (contPollo > cantidadMayor) {
        menuMasElegido = "Pollo";
        cantidadMayor = contPollo;
    }
    if (contEnsalada > cantidadMayor) {
        menuMasElegido = "Ensalada";
        cantidadMayor = contEnsalada;
    }

    // 6. Mostrar los resultados en el DOM (innerHTML - Clase 07)
    // Usamos Math.round() para redondear los porcentajes y que no queden con muchos decimales.
    let cajaResultado = document.querySelector("#resultados");
    cajaResultado.innerHTML = 
        "<strong>Resultados de la cena (12 personas):</strong><br><br>" +
        "🍝 Pasta: " + contPasta + " personas (" + Math.round(porcPasta) + "%)<br>" +
        "🍗 Pollo: " + contPollo + " personas (" + Math.round(porcPollo) + "%)<br>" +
        "🥗 Ensalada: " + contEnsalada + " personas (" + Math.round(porcEnsalada) + "%)<br><br>" +
        "🏆 <strong>El menú más elegido fue: " + menuMasElegido + " (" + cantidadMayor + " pedidos)</strong>";
}

// Vinculamos el botón HTML con la función en JS (Clase 07)
let botonIniciar = document.querySelector("#btn-iniciar");
botonIniciar.addEventListener("click", organizarCena);