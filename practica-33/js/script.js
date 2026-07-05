let corredores = [];

document.querySelector("#btn-agregar").addEventListener("click", () => {
    // 1. Capturar datos
    let nuevoCorredor = {
        nombre: document.querySelector("#nombre").value,
        apellido: document.querySelector("#apellido").value,
        edad: Number(document.querySelector("#edad").value),
        numero: Number(document.querySelector("#numero").value),
        tiempo: Number(document.querySelector("#tiempo").value)
    };

    // 2. Validación simple (Clase 08)
    if (nuevoCorredor.nombre === "" || nuevoCorredor.tiempo <= 0) {
        alert("Por favor, ingresa datos válidos.");
    } else {
        corredores.push(nuevoCorredor);
        alert("Corredor registrado");
    }
});

document.querySelector("#btn-procesar").addEventListener("click", () => {
    if (corredores.length === 0) return;

    let sumaTiempos = 0;
    let ganador = corredores[0]; // Asumimos que el primero es el mejor

    // 3. Procesar resultados (Clase 09)
    for (let i = 0; i < corredores.length; i++) {
        sumaTiempos += corredores[i].tiempo;
        
        if (corredores[i].tiempo < ganador.tiempo) {
            ganador = corredores[i];
        }
    }

    let promedio = sumaTiempos / corredores.length;
    
    // 4. Calcular % más rápidos (Punto C)
    let rapidos = 0;
    for (let i = 0; i < corredores.length; i++) {
        if (corredores[i].tiempo < promedio) {
            rapidos++;
        }
    }
    let porcentajeRapidos = (rapidos / corredores.length) * 100;

    // 5. Mostrar resultados
    document.querySelector("#resultados").innerHTML = 
        "Ganador: " + ganador.nombre + " " + ganador.apellido + " (Tiempo: " + ganador.tiempo + ")<br>" +
        "Promedio de tiempo: " + promedio.toFixed(2) + " min<br>" +
        "Porcentaje de corredores más rápidos que el promedio: " + porcentajeRapidos + "%";
});