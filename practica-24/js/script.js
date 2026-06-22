// 1. Declaramos la función que se ejecutará al hacer clic
function tirarDado() {

    // ==========================================
    // CÁLCULO DEL NÚMERO AL AZAR
    // ==========================================
    // Math.random() genera un decimal entre 0 y 0.999...
    // Lo multiplicamos por 6 para obtener un número entre 0 y 5.999...
    // Math.floor() le quita los decimales dejándolo entre 0 y 5.
    // Le sumamos 1 al final para que el rango sea de 1 a 6 exacto.
    let numeroAleatorio = Math.floor(Math.random() * 6) + 1;

    // ==========================================
    // CONSTRUCCIÓN DE LA URL (El consejo de la cátedra)
    // ==========================================
    // Como nuestras imágenes se llaman 1.jpg, 2.jpg, etc.
    // Concatenamos la carpeta, el número generado y la extensión.
    // -> Concatenación vista en: Clase 07.
    let rutaImagen = "img/" + numeroAleatorio + ".jpg";

    // ==========================================
    // MODIFICAR EL DOM
    // ==========================================
    // Seleccionamos la imagen del HTML
    // -> querySelector visto en: Clase 07.
    let elementoDado = document.querySelector("#imagen-dado");

    // En lugar de usar innerHTML (que cambia textos o etiquetas internas), 
    // modificamos directamente la propiedad 'src' de la imagen.
    elementoDado.src = rutaImagen;
}

// 2. Vinculamos el botón HTML con la función usando el "escuchador" de eventos
// -> addEventListener visto en: Clase 07.
let boton = document.querySelector("#btn-tirar");
boton.addEventListener("click", tirarDado);