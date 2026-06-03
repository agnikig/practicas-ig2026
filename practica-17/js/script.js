// ==========================================
// PRÁCTICA 17: DESCUENTO DE HOT SALE 🗓️
// ==========================================

// 1. Definir variables y asignar valores iniciales
// NOTA: Podés cambiar estos números por los valores que quieras probar.
let precioSinDescuento = 10000; // Variable para el precio del producto
let descuentoPorcentaje = 20;   // Variable para el descuento (un valor entre 1 y 100)

// 2. Realizar el cálculo matemático del descuento
// Multiplicamos el precio por el porcentaje y lo dividimos por 100 para obtener el monto a restar.
let montoDescuento = (precioSinDescuento * descuentoPorcentaje) / 100;

// Calculamos el precio final restando el monto del descuento al precio original.
let precioConDescuento = precioSinDescuento - montoDescuento;

// 3. Mostrar los resultados por la consola del navegador
// Concatenamos el texto con los valores de las variables usando el operador + 
console.log("Precio sin descuento es $ " + precioSinDescuento);
console.log("El descuento es " + descuentoPorcentaje + " %");
console.log("Precio con descuento es $ " + precioConDescuento);