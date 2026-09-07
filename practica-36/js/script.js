// 1. Array global para guardar los objetos
let biblioteca = [];

// 2. Capturamos el botón y le agregamos el evento
let boton = document.querySelector('#btn-guardar');

boton.addEventListener('click', function() {
    
    // 3. Capturar datos del formulario
    let titulo = document.querySelector('#titulo').value;
    let autor = document.querySelector('#autor').value;
    let anio = Number(document.querySelector('#anio').value); // Convertimos a número
    let prestamo = document.querySelector('#prestamo').value;

    // 4. Validación de datos (que no estén vacíos y el año sea válido)
    if (titulo === '' || autor === '' || anio <= 0 || isNaN(anio)) {
        alert('Por favor, ingresá datos válidos en todos los campos.');
        return; // Corta la ejecución si hay un error
    }

    // 5. Crear el objeto del libro usando sintaxis de llaves
    let nuevoLibro = {
        titulo: titulo,
        autor: autor,
        anio: anio,
        enPrestamo: prestamo === 'si' 
    };

    // 6. Guardar el objeto en el array
    biblioteca.push(nuevoLibro);

    // 7. Variables para los cálculos (las reiniciamos cada vez que se hace clic)
    let libroMasAntiguo = biblioteca[0]; // Empezamos asumiendo que el primero es el más antiguo
    let cantidadPrestados = 0;
    let cantidadMas100Anios = 0;

    // 8. Bucle for para recorrer el array y calcular
    for (let i = 0; i < biblioteca.length; i++) {
        
        // (a) Buscar el más antiguo
        if (biblioteca[i].anio < libroMasAntiguo.anio) {
            libroMasAntiguo = biblioteca[i];
        }

        // (b) Contar cuántos están en préstamo
        if (biblioteca[i].enPrestamo === true) {
            cantidadPrestados = cantidadPrestados + 1;
        }

        // (c) Contar libros de más de 100 años (Año actual 2026)
        if ((2026 - biblioteca[i].anio) > 100) {
            cantidadMas100Anios = cantidadMas100Anios + 1;
        }
    }

    // 9. Calcular porcentaje de más de 100 años
    let porcentaje100 = (cantidadMas100Anios / biblioteca.length) * 100;

    // 10. Mostrar resultados en el HTML
    document.querySelector('#resultados').innerHTML = 
        '<strong>Total de libros:</strong> ' + biblioteca.length + '<br>' +
        '<strong>(a) Libro más antiguo:</strong> ' + libroMasAntiguo.titulo + ' (' + libroMasAntiguo.anio + ')<br>' +
        '<strong>(b) Libros en préstamo:</strong> ' + cantidadPrestados + '<br>' +
        '<strong>(c) Porcentaje de libros de +100 años:</strong> ' + porcentaje100 + '%';
        
    // Opcional: Limpiar el formulario tras guardar
    document.querySelector('#titulo').value = '';
    document.querySelector('#autor').value = '';
    document.querySelector('#anio').value = '';
});