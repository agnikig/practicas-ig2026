// ==========================================
// 1. DECLARACIÓN DE LA FUNCIÓN PRINCIPAL
// ==========================================
// -> Visto en: Clase 08 (Funciones).
function generarInforme() {
    
    // Pedimos la cantidad de libros usando prompt() y lo convertimos a número.
    // -> Visto en: Clase 08.
    let cantidadText = prompt("¿Cuántos libros compraste en la Feria?");
    let cantidadLibros = Number(cantidadText);

    // ==========================================
    // 2. VALIDACIÓN CON BUCLE 'WHILE'
    // ==========================================
    // El bucle 'while' se repite MIENTRAS la condición sea verdadera. 
    // Usamos isNaN() para saber si ingresó texto, o verificamos si es menor o igual a 0.
    // -> Estructura repetitiva 'while' vista en: Clase 09, Diapositiva 6.
    while (isNaN(cantidadLibros) || cantidadLibros <= 0) {
        cantidadText = prompt("Error. Por favor, ingresá una cantidad válida de libros (número mayor a 0):");
        cantidadLibros = Number(cantidadText);
    }

    // ==========================================
    // 3. INICIALIZACIÓN DE VARIABLES Y ACUMULADORES
    // ==========================================
    // -> Acumuladores vistos en: Clase 09, Diapositiva 7.
    let totalGastado = 0;   // Empieza en 0 y va a ir sumando todos los precios.
    let masCaro = 0;        // Empieza en 0 para que cualquier precio lo supere.
    let masBarato = 999999; // Empieza altísimo para que el primer libro pase a ser el más barato.

    // ==========================================
    // 4. BUCLE 'FOR' PARA PEDIR PRECIOS
    // ==========================================
    // El bucle 'for' se utiliza cuando sabemos exactamente cuántas veces hay que repetir algo.
    // Arranca en 1, y se repite hasta que 'i' sea igual a la 'cantidadLibros'.
    // -> Estructura repetitiva 'for' vista en: Clase 09, Diapositiva 6.
    for (let i = 1; i <= cantidadLibros; i++) {
        
        let precioText = prompt("Ingresá el precio del libro número " + i + ":");
        let precio = Number(precioText);

        // Validamos el precio ingresado con otro bucle 'while'
        while (isNaN(precio) || precio <= 0) {
            precioText = prompt("Precio inválido. Ingresá el precio correcto del libro " + i + ":");
            precio = Number(precioText);
        }

        // --- Lógica del Acumulador ---
        // Sumamos el precio ingresado al total que veníamos acumulando.
        // -> Visto en: Clase 09, Diapositiva 7.
        totalGastado = totalGastado + precio;

        // --- Lógica de Máximos y Mínimos (Condicionales if) ---
        // -> Condicionales vistos en: Clase 07 y 08.
        
        // Si el precio actual es MAYOR que el que teníamos guardado como 'masCaro', lo actualizamos.
        if (precio > masCaro) {
            masCaro = precio;
        }

        // Si el precio actual es MENOR que el que teníamos guardado como 'masBarato', lo actualizamos.
        if (precio < masBarato) {
            masBarato = precio;
        }
    } 
    // FIN DEL BUCLE FOR.

    // ==========================================
    // 5. CÁLCULO DEL PROMEDIO
    // ==========================================
    // El promedio se calcula dividiendo el acumulador (totalGastado) por el total de elementos (cantidadLibros).
    // -> Operadores matemáticos vistos en: Clase 07.
    let promedio = totalGastado / cantidadLibros;

    // ==========================================
    // 6. MOSTRAR RESULTADOS EN EL DOM
    // ==========================================
    // Seleccionamos la caja de resultados del HTML y modificamos su contenido.
    // Usamos la etiqueta <br> de HTML dentro del texto para hacer saltos de línea.
    // -> Propiedad innerHTML vista en: Clase 07, Diapositiva 35.
    let cajaResultado = document.querySelector("#resultados");
    cajaResultado.innerHTML = 
        "Compraste <strong>" + cantidadLibros + "</strong> libros.<br><br>" +
        "Gastaste en total: <strong>$" + totalGastado + "</strong><br>" +
        "El más caro costó: <strong>$" + masCaro + "</strong><br>" +
        "El más barato costó: <strong>$" + masBarato + "</strong><br>" +
        "El precio promedio fue de: <strong>$" + promedio + "</strong>";
}

// ==========================================
// 7. EVENT LISTENER
// ==========================================
// Vinculamos el botón de HTML con la función para que no se dispare sola al cargar la página.
// -> Visto en: Clase 07, Diapositiva 42.
let botonIniciar = document.querySelector("#btn-iniciar");
botonIniciar.addEventListener("click", generarInforme);


/*
===================================================================
DECLARACIÓN DE USO DE IA (Punto 5)

¿Qué se consultó?: Se consultó a la IA para solicitarle la estructuración y resolución completa de la lógica de programación requerida para la Práctica 27, pidiendo explícitamente el uso de ciclos, acumuladores y validaciones vistos hasta la Clase 09.
¿Qué sugerencia se utilizó?: Se implementó la sugerencia de utilizar un bucle `while` para realizar la validación de tipos de datos y evitar números negativos/nulos. Se utilizó el bucle `for` para iterar la cantidad de veces exacta definida por el usuario, y la inicialización estratégica de variables extremas (ej. `masBarato = 999999`) para no errar en el cálculo del valor mínimo.
¿Qué se descartó?: No se descartó ninguna sugerencia en esta iteración final, dado que el código se ajusta estrictamente a los requerimientos de la cátedra sin incluir métodos ajenos al programa de estudio.
===================================================================
*/