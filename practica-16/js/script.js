// 3. Crear una variable que contenga un string con tu nombre.
let nombre = "Agustín";

// 4. Crear una variable que contenga un string con tu apellido.
let apellido = "Iglesias";

// 5. Crear una variable que combine a las dos variables anteriores con un espacio.
let nombreCompleto = nombre + " " + apellido;

// 6. Crear una variable que contenga un número con tu edad.
let edad = 23;

// 7. Crear una constante que contenga el nombre de la Universidad.
const universidad = "Universidad Nacional de las Artes";

// 8. Mostrar el valor de cada variable y constante en la consola.
console.log("--- VALORES INICIALES ---");
console.log("Nombre completo:", nombreCompleto);
console.log("Edad:", edad);
console.log("Universidad:", universidad);

// 9. Modificar el valor de todas las variables y constantes.
nombre = "Nicolás";
apellido = "Boreztein";
nombreCompleto = nombre + " " + apellido;
edad = 25;

// NOTA: Descomentar la siguiente línea provocará un error en la consola
// porque las constantes (const) NO se pueden modificar una vez asignadas.
// universidad = "Otra Universidad"; 

// 10. Volver a mostrar el valor en la consola.
console.log("--- VALORES MODIFICADOS ---");
console.log("Nombre completo modificado:", nombreCompleto);
console.log("Edad modificada:", edad);
console.log("Universidad:", universidad);