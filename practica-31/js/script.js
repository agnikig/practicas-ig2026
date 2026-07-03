// Arrays para guardar la información global
let nombresClientes = [];
let montosCompras = [];

function registrarPedido() {
    let nombre = document.querySelector("#nombre").value;
    let monto = Number(document.querySelector("#monto").value);

    // .push() es la forma estándar de agregar elementos a un array (Clase 09)
    nombresClientes.push(nombre);
    montosCompras.push(monto);

    alert("Pedido de " + nombre + " registrado.");
    
    document.querySelector("#nombre").value = "";
    document.querySelector("#monto").value = "";
}

function calcularResultados() {
    let totalAcumulado = 0;
    let gastoMaximo = 0;
    let indiceMaximo = 0;

    // Bucle FOR para recorrer los arrays (Clase 09)
    for (let i = 0; i < montosCompras.length; i++) {
        
        // Acumular total: reemplazamos += por la forma extendida (Clase 07/08)
        totalAcumulado = totalAcumulado + montosCompras[i];

        // Buscar el mayor (Condicional IF - Clase 07/08)
        if (montosCompras[i] > gastoMaximo) {
            gastoMaximo = montosCompras[i];
            indiceMaximo = i;
        }
    }

    // Calcular promedio
    let promedio = totalAcumulado / montosCompras.length;

    // Calcular descuento reemplazando el operador ternario por IF/ELSE (Clase 08)
    let descuento = 0;
    if (gastoMaximo > 50000) {
        descuento = gastoMaximo * 0.30;
    } else {
        descuento = gastoMaximo * 0.15;
    }
    
    let montoFinal = gastoMaximo - descuento;

    // Mostrar en el DOM
    document.querySelector("#resultados").innerHTML = 
        "Total de clientes: " + montosCompras.length + "<br>" +
        "Promedio de compra: $" + promedio + "<br>" +
        "El cliente que más gastó es " + nombresClientes[indiceMaximo] + 
        ". Monto final con descuento: $" + montoFinal;
}

// Vinculación de eventos (Clase 07)
document.querySelector("#btn-registrar").addEventListener("click", registrarPedido);
document.querySelector("#btn-calcular").addEventListener("click", calcularResultados);