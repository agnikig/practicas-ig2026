// 1. Declaramos la función que hará el trabajo
function sugerirSerie() {

    // 2. Capturamos los datos ingresados
    // -> Propiedad .value vista en Clase 08
    let nombre = document.querySelector("#nombre").value;
    let inputEdad = document.querySelector("#edad").value;
    let genero = document.querySelector("#genero").value;

    // Convertimos la edad a número para poder usar operadores matemáticos
    let edad = Number(inputEdad);
    
    // Variable vacía donde guardaremos el nombre de la serie elegida
    let serieSugerida = "";

    // 3. Lógica de selección (Condicionales anidados - Clase 07 y 08)
    if (edad >= 18) {
        // Si es mayor o igual a 18, evaluamos el género con un switch
        switch (genero) {
            case "comedia":
                serieSugerida = "The Office";
                break;
            case "accion":
                serieSugerida = "The Boys";
                break;
            case "romance":
                serieSugerida = "Bridgerton";
                break;
        }
    } else {
        // Si es menor de 18 (else), sugerimos series ATP (Aptas para Todo Público)
        switch (genero) {
            case "comedia":
                serieSugerida = "Malcolm in the Middle";
                break;
            case "accion":
                serieSugerida = "Avatar: La Leyenda de Aang";
                break;
            case "romance":
                serieSugerida = "Heartstopper";
                break;
        }
    }

    // 4. Mostramos el resultado concatenando el nombre, un saludo y la serie
    // -> innerHTML visto en Clase 07
    let cajaResultado = document.querySelector("#resultado");
    cajaResultado.innerHTML = "¡Hola " + nombre + "! Según tu edad y tus gustos, te recomendamos ver: " + serieSugerida;
}

// 5. Asignamos el evento al botón (Separación de HTML y JS)
// -> addEventListener visto en Clase 07
let boton = document.querySelector("#btn-sugerir");
boton.addEventListener("click", sugerirSerie);