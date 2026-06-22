// Declaramos la función de cálculo
function calcularPresupuesto() {

    // 1. Capturamos los datos y los convertimos a números (Clase 08)
    let cantProyectores = Number(document.querySelector("#proyectores").value);
    let cantComputadoras = Number(document.querySelector("#computadoras").value);
    let cantPantallas = Number(document.querySelector("#pantallas").value);
    let cantDias = Number(document.querySelector("#dias").value);

    // ==========================================
    // IA SUGIERE: Guardar los precios en variables para evitar errores
    // y facilitar futuras actualizaciones.
    // ==========================================
    let precioProyector = 45000;
    let precioComputadora = 50000;
    let precioPantalla = 35000;

    // 2. Calculamos el costo por un solo día
    // -> Operadores aritméticos (+ y *) vistos en la Clase 07.
    let costoPorDia = (cantProyectores * precioProyector) + 
                      (cantComputadoras * precioComputadora) + 
                      (cantPantallas * precioPantalla);

    // 3. Multiplicamos el costo de un día por la cantidad de días
    let totalBruto = costoPorDia * cantDias;

    // 4. Aplicamos el descuento si supera los $500.000 (Condicionales - Clase 07/08)
    let totalAPagar = totalBruto; // Por defecto es igual al bruto

    if (totalBruto > 500000) {
        // Calculamos el 10% del total
        let descuento = (totalBruto * 10) / 100;
        // Se lo restamos al total
        totalAPagar = totalBruto - descuento;
    }

    // 5. Mostramos el resultado en pantalla (DOM - Clase 07)
    let cajaResultado = document.querySelector("#resultado");
    
    // Mostramos si tuvo descuento o no en el mensaje
    if (totalBruto > 500000) {
        cajaResultado.innerHTML = "Tu total superó los $500.000. Con el descuento del 10% aplicado, tu presupuesto final es de: $" + totalAPagar;
    } else {
        cajaResultado.innerHTML = "El presupuesto final para " + cantDias + " días es de: $" + totalAPagar;
    }
}

// 6. Asignamos el evento click al botón
// -> addEventListener visto en Clase 07
let botonCalcular = document.querySelector("#btn-calcular");
botonCalcular.addEventListener("click", calcularPresupuesto);


/*
===================================================================
DECLARACIÓN DE USO DE IA (Punto 7)
Podés copiar y pegar este texto en tu entrega:

¿Qué se consultó?: Se le pidió a la IA que revise la lógica matemática para calcular el alquiler y aplicar el descuento correctamente, identificando posibles puntos de mejora.
¿Qué sugerencia se utilizó?: Se utilizó la sugerencia de la IA de almacenar los valores de los equipos en variables independientes (precioProyector, precioComputadora, precioPantalla) en lugar de ingresarlos directamente como "números mágicos" dentro de la cuenta matemática. Esto organiza mejor el cálculo y previene errores al multiplicar.
¿Qué se descartó?: La IA sugirió aplicar el descuento multiplicando el total por 0.90, pero se descartó porque se prefirió mantener el cálculo tradicional del porcentaje con regla de tres simple ((total * 10) / 100) y luego restarlo, ya que resulta más legible y acorde a lo ejercitado en las clases.
===================================================================
*/