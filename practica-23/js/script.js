// ==========================================
// 1. DECLARACIÓN DE LA FUNCIÓN PRINCIPAL
// ==========================================
// Encapsulamos todo el código dentro de una función para que no se ejecute 
// apenas carga la página, sino solo cuando el usuario haga clic en el botón.
// -> Visto en: Clase 08, Diapositiva 13 (Funciones en JavaScript).
function analizarPupitres() {

    // ==========================================
    // 2. CAPTURA DE DATOS DEL FORMULARIO
    // ==========================================
    // Usamos querySelector() para seleccionar cada input del HTML a través de su ID.
    // -> Visto en: Clase 07, Diapositiva 29 (Seleccionar elementos del DOM).
    //
    // Luego extraemos lo que el usuario escribió usando la propiedad .value.
    // -> Visto en: Clase 08, Diapositiva 6 (Capturar datos de un formulario).
    //
    // Todo eso lo envolvemos en la función Number() para asegurar que JavaScript 
    // lo trate como un número matemático y no como texto (String).
    // -> Visto en: Clase 08, Diapositiva 8 (Capturar números).
    let a001 = Number(document.querySelector("#aula001").value);
    let a101 = Number(document.querySelector("#aula101").value);
    let a201 = Number(document.querySelector("#aula201").value);
    let a301 = Number(document.querySelector("#aula301").value);
    let a501 = Number(document.querySelector("#aula501").value);


    // ==========================================
    // 3. BUSCAR EL AULA CON MÁS PUPITRES
    // ==========================================
    // Para empezar a comparar, asumimos por defecto que la primera aula es la mayor.
    // -> Declaración de variables (let) vista en: Clase 07, Diapositiva 9.
    let mayorCantidad = a001;
    let aulaMayor = "001";

    // Usamos condicionales (if) para comparar las demás aulas secuencialmente.
    // -> Estructura condicional 'if' vista en: Clase 07, Diapositiva 44 / Clase 08, Diapo 23.
    // -> Operador relacional Mayor que (>) visto en: Clase 07, Diapositiva 14.
    // Si la condición se cumple, actualizamos las variables con los nuevos datos.
    if (a101 > mayorCantidad) { mayorCantidad = a101; aulaMayor = "101"; }
    if (a201 > mayorCantidad) { mayorCantidad = a201; aulaMayor = "201"; }
    if (a301 > mayorCantidad) { mayorCantidad = a301; aulaMayor = "301"; }
    if (a501 > mayorCantidad) { mayorCantidad = a501; aulaMayor = "501"; }


    // ==========================================
    // 4. BUSCAR EL AULA CON MENOS PUPITRES
    // ==========================================
    // Aplicamos exactamente la misma lógica, pero asumiendo que es la menor.
    let menorCantidad = a001;
    let aulaMenor = "001";

    // Usamos el operador relacional Menor que (<) para comparar.
    // -> Visto en: Clase 07, Diapositiva 14.
    if (a101 < menorCantidad) { menorCantidad = a101; aulaMenor = "101"; }
    if (a201 < menorCantidad) { menorCantidad = a201; aulaMenor = "201"; }
    if (a301 < menorCantidad) { menorCantidad = a301; aulaMenor = "301"; }
    if (a501 < menorCantidad) { menorCantidad = a501; aulaMenor = "501"; }


    // ==========================================
    // 5. CALCULAR CUÁNTOS PUPITRES COMPRAR
    // ==========================================
    // Declaramos una variable acumuladora que empieza en cero.
    let pupitresAComprar = 0;

    // Evaluamos aula por aula con un condicional: si tiene menos de 80, 
    // calculamos la diferencia (80 - cantidad) y se la sumamos a la variable acumuladora.
    // -> Operadores aritméticos (+ y -) vistos en: Clase 07, Diapositiva 14.
    if (a001 < 80) { pupitresAComprar = pupitresAComprar + (80 - a001); }
    if (a101 < 80) { pupitresAComprar = pupitresAComprar + (80 - a101); }
    if (a201 < 80) { pupitresAComprar = pupitresAComprar + (80 - a201); }
    if (a301 < 80) { pupitresAComprar = pupitresAComprar + (80 - a301); }
    if (a501 < 80) { pupitresAComprar = pupitresAComprar + (80 - a501); }


    // ==========================================
    // 6. MOSTRAR RESULTADOS EN EL HTML
    // ==========================================
    // Seleccionamos los encabezados <h3> vacíos usando querySelector y modificamos 
    // su contenido mediante innerHTML. Concatenamos los textos y variables con el signo +.
    // -> Propiedad innerHTML vista en: Clase 07, Diapositiva 35.
    // -> Concatenación de Strings y Numbers vista en: Clase 07, Diapositiva 13.
    document.querySelector("#resultado-mayor").innerHTML = "El aula con MÁS pupitres es la " + aulaMayor + " con " + mayorCantidad + " pupitres.";
    
    document.querySelector("#resultado-menor").innerHTML = "El aula con MENOS pupitres es la " + aulaMenor + " con " + menorCantidad + " pupitres.";
    
    document.querySelector("#resultado-comprar").innerHTML = "Para completar todas las aulas a 80, se deben comprar: " + pupitresAComprar + " pupitres.";
}

// ==========================================
// 7. EVENTOS (Separación de HTML y JS)
// ==========================================
// Para no usar atributos como 'onclick' en el HTML, capturamos el botón desde JS.
// -> Visto en: Clase 07, Diapositiva 29.
let boton = document.querySelector("#btn-calcular");

// Le agregamos un "escuchador" de eventos. Cuando ocurra el evento "click", 
// se llamará automáticamente a la función 'analizarPupitres' (sin paréntesis).
// -> Evento addEventListener visto en: Clase 07, Diapositiva 42.
boton.addEventListener("click", analizarPupitres);


/*
===================================================================
DECLARACIÓN DE USO DE IA (Punto 5)

¿Qué se consultó?: Se le pidió a la IA que estructure el código para resolver el cálculo de pupitres de la Práctica 23, con la restricción explícita de utilizar únicamente temas vistos hasta la Clase 08.
¿Qué sugerencia se utilizó?: Se utilizó la estrategia de definir múltiples bloques de condicionales 'if' simples secuenciales para encontrar el valor mayor y el menor, comparando los datos numéricos extraídos del formulario uno por uno. 
¿Qué se descartó?: La IA fue instruida previamente para descartar el uso de Arrays y Estructuras Repetitivas (como for o while), ya que dichas herramientas se introducen recién a partir de la Clase 09. También se descartó el uso de interactividad embebida en HTML (onclick), optando por aplicar buenas prácticas con addEventListener como indica la cátedra.
===================================================================
*/