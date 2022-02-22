var numero = parseInt(prompt("Ingrese el numero",""));

var descuento;


descuento = numero * 0;
var precioFinal = numero - descuento;


if(numero <= 74 ){
    numero - descuento * 0.15;
    alert("su descuento fue del 15%")
}else{
    numero - descuento * 0.20;
    alert("su descuento fue del 20%")
}

alert("El descuento es de " + precioFinal);