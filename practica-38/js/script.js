// Variables globales y contadores clásicos
let inventario = [];
let cantidadEquipos = 0;

// Captura de elementos del DOM
let inputDesc = document.querySelector('#desc-equipo');
let selectEstado = document.querySelector('#estado-equipo');
let btnAgregar = document.querySelector('#btn-agregar');

let inputPrestarNombre = document.querySelector('#nombre-prestar');
let inputPrestarDias = document.querySelector('#dias-prestar');
let btnPrestar = document.querySelector('#btn-prestar');

let btnResultados = document.querySelector('#btn-resultados');
let cajaResultados = document.querySelector('#resultados');

// ==========================================
// MOMENTO 1: Ingresar Equipamiento
// ==========================================
btnAgregar.addEventListener('click', function() {
    let desc = inputDesc.value;
    let estado = selectEstado.value;

    if (desc === "") {
        alert("Por favor, ingrese la descripción del equipo.");
        return;
    }

    // Creamos el objeto
    let nuevoEquipo = {
        descripcion: desc,
        prestado: estado === "si", // Guarda true o false
        dias: 0 // Inicia en 0 días
    };

    // Guardamos en el array manualmente sin .push()
    inventario[cantidadEquipos] = nuevoEquipo;
    cantidadEquipos = cantidadEquipos + 1;

    alert("Equipo '" + desc + "' agregado al inventario.");
    inputDesc.value = "";
});

// ==========================================
// MOMENTO 2: Registrar Préstamo
// ==========================================
btnPrestar.addEventListener('click', function() {
    let nombreBuscado = inputPrestarNombre.value;
    let dias = Number(inputPrestarDias.value);

    if (nombreBuscado === "" || dias <= 0) {
        alert("Ingrese un nombre y una cantidad de días válida.");
        return;
    }

    let encontrado = false;

    // Bucle clásico para buscar el equipo
    for (let i = 0; i < cantidadEquipos; i = i + 1) {
        if (inventario[i].descripcion === nombreBuscado) {
            encontrado = true;
            
            if (inventario[i].prestado === true) {
                alert("Error: El equipo ya se encuentra prestado.");
            } else {
                // Actualizamos las propiedades del objeto
                inventario[i].prestado = true;
                inventario[i].dias = dias;
                alert("Préstamo registrado exitosamente.");
            }
        }
    }

    if (encontrado === false) {
        alert("No se encontró un equipo con ese nombre en el inventario.");
    }

    inputPrestarNombre.value = "";
    inputPrestarDias.value = "";
});

// ==========================================
// MOMENTO 3: Calcular Resultados
// ==========================================
btnResultados.addEventListener('click', function() {
    let listaPrestados = "";
    let listaDisponibles = "";
    let masDe5Dias = 0; // Acumulador

    for (let i = 0; i < cantidadEquipos; i = i + 1) {
        
        if (inventario[i].prestado === true) {
            // Acumulamos texto para mostrar la lista
            listaPrestados = listaPrestados + "<li>" + inventario[i].descripcion + " (" + inventario[i].dias + " días)</li>";

            // (c) Contar si supera los 5 días
            if (inventario[i].dias > 5) {
                masDe5Dias = masDe5Dias + 1;
            }
        } else {
            listaDisponibles = listaDisponibles + "<li>" + inventario[i].descripcion + "</li>";
        }
    }

    cajaResultados.innerHTML = 
        "<strong>(a) Equipos actualmente prestados:</strong><ul>" + listaPrestados + "</ul>" +
        "<strong>(b) Equipos disponibles:</strong><ul>" + listaDisponibles + "</ul>" +
        "<strong>(c) Cantidad de equipos prestados por más de 5 días:</strong> " + masDe5Dias;
});