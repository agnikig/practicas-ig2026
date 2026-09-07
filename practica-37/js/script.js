// 1. Arrays globales y contadores clásicos
let legajosIngresados = []; 
let cantidadVotos = 0; // Usamos un contador manual en lugar de .push()
let legajoActual = ""; 

// Array de objetos para los candidatos
let candidatos = [
    { nombre: "Candidato 1", votos: 0 },
    { nombre: "Candidato 2", votos: 0 },
    { nombre: "Candidato 3", votos: 0 }
];

// 2. Capturamos los elementos del DOM
let inputLegajo = document.querySelector('#legajo');
let btnValidar = document.querySelector('#btn-validar');
let btnC1 = document.querySelector('#btn-c1');
let btnC2 = document.querySelector('#btn-c2');
let btnC3 = document.querySelector('#btn-c3');
let cajaResultados = document.querySelector('#resultados');

// 3. Función para habilitar la votación
btnValidar.addEventListener('click', function() {
    let legajo = inputLegajo.value;

    if (legajo === "" || Number(legajo) <= 0) {
        alert("Por favor, ingrese un legajo válido.");
        return;
    }

    // Bucle para validar (con incremento clásico i = i + 1)
    let yaVoto = false;
    for (let i = 0; i < cantidadVotos; i = i + 1) {
        if (legajosIngresados[i] === legajo) {
            yaVoto = true;
        }
    }

    if (yaVoto === true) {
        alert("Error: Este legajo ya registró su voto.");
    } else {
        legajoActual = legajo;
        btnC1.disabled = false;
        btnC2.disabled = false;
        btnC3.disabled = false;
        
        inputLegajo.disabled = true;
        btnValidar.disabled = true;
        alert("Legajo validado. Ya puede emitir su voto.");
    }
});

// 4. Función general para registrar el voto
function registrarVoto(indiceCandidato) {
    // Suma tradicional (sin ++)
    candidatos[indiceCandidato].votos = candidatos[indiceCandidato].votos + 1;
    
    // Guardamos el legajo en el array usando la posición del contador
    legajosIngresados[cantidadVotos] = legajoActual;
    
    // Aumentamos el contador total de votos
    cantidadVotos = cantidadVotos + 1;

    // Bloqueamos los botones
    btnC1.disabled = true;
    btnC2.disabled = true;
    btnC3.disabled = true;
    inputLegajo.disabled = false;
    btnValidar.disabled = false;
    inputLegajo.value = "";

    calcularYMostrarResultados();
}

// 5. Asignamos los eventos
btnC1.addEventListener('click', function() { registrarVoto(0); });
btnC2.addEventListener('click', function() { registrarVoto(1); });
btnC3.addEventListener('click', function() { registrarVoto(2); });

// 6. Procesar y mostrar la info
function calcularYMostrarResultados() {
    let ganador = candidatos[0]; 
    
    // Bucle con suma tradicional
    for (let i = 0; i < candidatos.length; i = i + 1) {
        if (candidatos[i].votos > ganador.votos) {
            ganador = candidatos[i];
        }
    }

    // Cálculo de porcentajes puros (sin redondear)
    let pctC1 = (candidatos[0].votos / cantidadVotos) * 100;
    let pctC2 = (candidatos[1].votos / cantidadVotos) * 100;
    let pctC3 = (candidatos[2].votos / cantidadVotos) * 100;

    cajaResultados.innerHTML = 
        '<strong>Total de votos emitidos:</strong> ' + cantidadVotos + '<br><br>' +
        '<strong>Candidato 1:</strong> ' + pctC1 + '% (' + candidatos[0].votos + ' votos)<br>' +
        '<strong>Candidato 2:</strong> ' + pctC2 + '% (' + candidatos[1].votos + ' votos)<br>' +
        '<strong>Candidato 3:</strong> ' + pctC3 + '% (' + candidatos[2].votos + ' votos)<br><br>' +
        '<strong>🏆 Ganador Parcial:</strong> ' + ganador.nombre;
}