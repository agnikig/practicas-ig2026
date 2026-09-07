// Arrays y contadores globales
let compras = [];
let cantidadCompras = 0; 

// Capturamos los elementos usando querySelector y .value[cite: 3]
let inputItem = document.querySelector('#item');
let inputCosto = document.querySelector('#costo');
let selectMedio = document.querySelector('#medio-pago');
let btnAgregar = document.querySelector('#btn-agregar');
let btnCalcular = document.querySelector('#btn-calcular');
let cajaResultados = document.querySelector('#resultados');

// Función para agregar al carrito
btnAgregar.addEventListener('click', function() {
    let item = inputItem.value;
    let costo = Number(inputCosto.value);
    let medio = selectMedio.value;

    if (item === "" || costo <= 0) {
        alert("Por favor, ingrese un ítem y un costo válido.");
        return;
    }

    // Creamos el objeto de la compra
    let nuevaCompra = {
        item: item,
        costo: costo,
        medio: medio
    };

    // Asignación manual al array (Sin atajos)[cite: 4]
    compras[cantidadCompras] = nuevaCompra;
    cantidadCompras = cantidadCompras + 1;

    alert("Se agregó: " + item + " ($" + costo + ")");
    
    // Limpiamos los campos
    inputItem.value = "";
    inputCosto.value = "";
});

// Función para procesar la información
btnCalcular.addEventListener('click', function() {
    if (cantidadCompras === 0) {
        alert("Todavía no cargaste ninguna compra.");
        return;
    }

    // (a) Acumuladores para los totales[cite: 3]
    let totalGeneral = 0;
    let totalEfectivo = 0;
    let totalDebito = 0;
    let totalCredito = 0;

    // (c) Contador específico para efectivo > 20000[cite: 3]
    let efectivoMayor20k = 0;

    // (b) Variables para el máximo y mínimo (Tomamos el primero como referencia)[cite: 3]
    let masCostoso = compras[0];
    let menosCostoso = compras[0];

    // Bucle for clásico[cite: 3]
    for (let i = 0; i < cantidadCompras; i = i + 1) {
        
        // Acumulamos el total general
        totalGeneral = totalGeneral + compras[i].costo;

        // Condicionales para separar por medio de pago
        if (compras[i].medio === "efectivo") {
            totalEfectivo = totalEfectivo + compras[i].costo;
            
            // Si es efectivo, verificamos si supera los $20.000
            if (compras[i].costo > 20000) {
                efectivoMayor20k = efectivoMayor20k + 1;
            }

        } else if (compras[i].medio === "debito") {
            totalDebito = totalDebito + compras[i].costo;

        } else if (compras[i].medio === "credito") {
            totalCredito = totalCredito + compras[i].costo;
        }

        // Búsqueda del Máximo[cite: 3]
        if (compras[i].costo > masCostoso.costo) {
            masCostoso = compras[i];
        }

        // Búsqueda del Mínimo[cite: 3]
        if (compras[i].costo < menosCostoso.costo) {
            menosCostoso = compras[i];
        }
    }

    // Mostrar todo en pantalla (Concatenación tradicional)[cite: 4]
    cajaResultados.innerHTML = 
        "<strong>(a) Totales por medio de pago:</strong><br>" +
        "Efectivo: $" + totalEfectivo + "<br>" +
        "Débito: $" + totalDebito + "<br>" +
        "Crédito: $" + totalCredito + "<br>" +
        "<strong>Total General: $" + totalGeneral + "</strong><br><br>" +
        
        "<strong>(b) Ítems extremos:</strong><br>" +
        "Más costoso: " + masCostoso.item + " ($" + masCostoso.costo + ")<br>" +
        "Menos costoso: " + menosCostoso.item + " ($" + menosCostoso.costo + ")<br><br>" +
        
        "<strong>(c) Compras en efectivo mayores a $20.000:</strong> " + efectivoMayor20k;
});