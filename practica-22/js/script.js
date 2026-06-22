// 1. Declaramos la función que realiza el cálculo matemático
// -> Visto en: Clase 08, Sección de Funciones.
function calcularPrecioFinal() {

    // Capturamos los valores ingresados en los inputs
    // -> Propiedad .value vista en: Clase 08, Formularios.
    let inputPrecio = document.querySelector("#precio").value;
    let inputDescuento = document.querySelector("#descuento").value;

    // Convertimos los textos capturados a números para evitar errores de concatenación
    // -> Visto en: Clase 08, uso de Number().
    let precio = Number(inputPrecio);
    let porcentaje = Number(inputDescuento);

    // Calculamos el descuento y el precio final
    // -> Operadores aritméticos vistos en: Clase 07.
    let montoDescontado = (precio * porcentaje) / 100;
    let precioFinal = precio - montoDescontado;

    // Mostramos el resultado en el DOM
    // -> Propiedad innerHTML vista en: Clase 07.
    let cajaResultado = document.querySelector("#resultado");
    cajaResultado.innerHTML = "El precio final con el descuento es de: $" + precioFinal;
}

// 2. Seleccionamos el botón usando querySelector
// -> Visto en: Clase 07.
let botonCalcular = document.querySelector("#btn-calcular");

// 3. Le agregamos el Event Listener al botón para que "escuche" el clic y ejecute la función
// -> Visto en: Clase 07, Diapositivas de Eventos (addEventListener).
// Nota: Cuando pasamos la función en addEventListener, va sin paréntesis ().
botonCalcular.addEventListener("click", calcularPrecioFinal);


/*
===================================================================
DECLARACIÓN DE USO DE IA (Punto 4 de la Consigna)

¿Qué se consultó?: Se le pidió a la IA que estructure el código base del formulario y que revise la lógica del cálculo matemático del descuento.
¿Qué sugerencia se utilizó?: Se utilizó la sugerencia de la IA de aplicar el método Number() a los valores extraídos del formulario (.value) para asegurar que el navegador los trate como valores numéricos y no como texto.
¿Qué se descartó?: Se descartó la sugerencia inicial de la IA de utilizar el atributo 'onclick' directamente en el HTML. En su lugar, como alumno corregí el código para aplicar las buenas prácticas enseñadas en la Clase 07, implementando el método addEventListener("click", ...) directamente desde el archivo JavaScript para separar la estructura de la interactividad.
===================================================================
*/