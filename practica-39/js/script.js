// 1. Arrays globales y contadores clásicos
let atletas = [];
let cantidadAtletas = 0;

// 2. Captura de elementos
let inputNombre = document.querySelector('#nombre');
let inputEdad = document.querySelector('#edad');
let selectTipo = document.querySelector('#tipo-ejercicio');
let inputMinutos = document.querySelector('#minutos');
let btnAgregar = document.querySelector('#btn-agregar');
let btnResultados = document.querySelector('#btn-resultados');
let cajaResultados = document.querySelector('#resultados');

// 3. Función para agregar rutinas
btnAgregar.addEventListener('click', function() {
    let nombre = inputNombre.value;
    let edad = Number(inputEdad.value);
    let minutos = Number(inputMinutos.value);

    // Validación básica
    if (nombre === "" || minutos <= 0 || edad <= 0) {
        alert("Por favor, ingrese datos válidos.");
        return;
    }

    let encontrado = false;

    // Bucle para buscar si el atleta YA existe (porque puede hacer más de un ejercicio)
    for (let i = 0; i < cantidadAtletas; i = i + 1) {
        if (atletas[i].nombre === nombre) {
            // Si ya existe, le sumamos los minutos nuevos a su total acumulado
            atletas[i].tiempoTotal = atletas[i].tiempoTotal + minutos;
            encontrado = true;
        }
    }

    // Si terminó el bucle y NO lo encontró, es un atleta nuevo. Lo creamos.
    if (encontrado === false) {
        let nuevoAtleta = {
            nombre: nombre,
            edad: edad,
            tiempoTotal: minutos // Inicia con los primeros minutos ingresados
        };
        
        // Guardamos en el array usando el contador
        atletas[cantidadAtletas] = nuevoAtleta;
        cantidadAtletas = cantidadAtletas + 1;
    }

    alert("Entrenamiento de " + nombre + " registrado.");
    
    // Limpiamos el formulario
    inputNombre.value = "";
    inputEdad.value = "";
    inputMinutos.value = "";
});

// 4. Función para calcular los resultados finales
btnResultados.addEventListener('click', function() {
    if (cantidadAtletas === 0) {
        alert("No hay atletas cargados todavía.");
        return;
    }

    let listaTiempos = "";
    let atletaMaximo = atletas[0]; // Asumimos que el primero es el que más entrena
    let menosDe60Min = 0; // Contador

    // Bucle de cálculos
    for (let i = 0; i < cantidadAtletas; i = i + 1) {
        
        // (a) Armamos la lista de tiempos por atleta
        listaTiempos = listaTiempos + "<li>" + atletas[i].nombre + ": " + atletas[i].tiempoTotal + " minutos</li>";

        // (b) Buscamos al que más entrena
        if (atletas[i].tiempoTotal > atletaMaximo.tiempoTotal) {
            atletaMaximo = atletas[i];
        }

        // (c) Contamos si entrena menos de 60 minutos
        if (atletas[i].tiempoTotal < 60) {
            menosDe60Min = menosDe60Min + 1;
        }
    }

    // Cálculo del porcentaje
    let porcentaje = (menosDe60Min / cantidadAtletas) * 100;

    // Mostrar en el DOM
    cajaResultados.innerHTML = 
        "<strong>(a) Tiempo total de cada atleta:</strong><ul>" + listaTiempos + "</ul>" +
        "<strong>(b) Atleta que más entrena:</strong> " + atletaMaximo.nombre + " (" + atletaMaximo.tiempoTotal + " min)<br><br>" +
        "<strong>(c) Porcentaje con menos de 60 min:</strong> " + porcentaje + "%";
});