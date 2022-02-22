var precio = parseInt(prompt("Ingrese el precio de la camisa",""));
var cantidad = parseInt(prompt("Ingrese la cantidad de camisas",""));


var compra = precio * cantidad;
var descuento = compra * 0;
var pagar = compra - descuento;

if(compra > 3 ){
    descuento = compra * 0.15;
}


alert("El descuento es: " + descuento);
alert("El total a pagar es: " + pagar);