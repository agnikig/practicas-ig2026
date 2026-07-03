// Función principal que ejecuta la lógica de la prueba
function iniciarPrueba() {

    // ==========================================
    // 1. DEFINICIÓN DE ARRAYS (Clase 09)
    // ==========================================
    let preguntas = [
        "¿De qué color es el caballo blanco de San Martín?", // 0
        "¿Cuánto es 2 + 2?",                                 // 1
        "¿De qué país es Messi?",                            // 2
        "¿Cuánto es 8 X 8?",                                 // 3
        "¿Cómo se llama el estadio de Boca Juniors?",        // 4
        "¿En qué continente se encuentra China?",            // 5
        "¿Cuál es el planeta rojo?",                         // 6
        "¿Quién pintó la Mona Lisa?",                        // 7
        "¿Cuál es el río más largo del mundo?",              // 8
        "¿Cuántos meses tiene un año?"                       // 9
    ];

    let respuestasCorrectas = [
        "blanco", 
        "4",
        "argentina",
        "64",
        "la bombonera",
        "asia",
        "marte",
        "da vinci",
        "amazonas",
        "12"
    ];

    // ==========================================
    // 2. INICIALIZACIÓN DEL CONTADOR (Clase 09)
    // ==========================================
    let puntaje = 0;

    // ==========================================
    // 3. BUCLE FOR PARA LA PRUEBA (Clase 09)
    // ==========================================
    for (let i = 0; i < preguntas.length; i++) {
        
        // Pedimos la respuesta al usuario
        let respuestaUsuario = prompt(preguntas[i]);

        // Validamos si el usuario no canceló
        if (respuestaUsuario !== null) {
            
            // Normalizamos: pasamos a minúsculas y quitamos espacios (Clase 07/08)
            respuestaUsuario = respuestaUsuario.toLowerCase();
            
            // ==========================================
            // 4. COMPARACIÓN (Condicionales - Clase 07/08)
            // ==========================================
            if (respuestaUsuario === respuestasCorrectas[i]) {
                alert("¡Correcto!");
                puntaje++; // Sumamos 1 al contador de aciertos
            } else {
                alert("Incorrecto. La respuesta era: " + respuestasCorrectas[i]);
            }

        } else {
            // Si el usuario cancela, salimos de la prueba
            alert("Prueba cancelada.");
            break; 
        }
    } 

    // ==========================================
    // 5. RESULTADO FINAL (DOM - Clase 07)
    // ==========================================
    let cajaResultados = document.querySelector("#resultados");
    cajaResultados.innerHTML = "¡Prueba finalizada! Contestaste correctamente: <strong>" + puntaje + "</strong> de " + preguntas.length + " preguntas.";
}

// Vinculación del evento al botón
let boton = document.querySelector("#btn-iniciar");
boton.addEventListener("click", iniciarPrueba);

/*
===================================================================
DECLARACIÓN DE USO DE IA

¿Qué se consultó?: Se consultó a la IA para verificar la estructura algorítmica lógica utilizando Arrays y bucles 'for' según lo visto en la Clase 09.
¿Qué sugerencia se utilizó?: Se utilizó la sugerencia de usar arrays paralelos (uno para preguntas y otro para respuestas) y la técnica de normalizar la entrada del usuario mediante .toLowerCase() y .trim() para evitar errores por formato de escritura.
¿Qué se descartó?: No se utilizó código generado automáticamente, siendo la sintaxis escrita de forma manual respetando los contenidos de la cátedra IG2026.
===================================================================
*/