var vip = 0;
var estandar = 0;
var popular = 0;
var sencilla = 0;
var valor;
var edad;
var total;
var descuento;
var cantBoletas;



var cantBoletas = parseInt(prompt("Ingresa la cantidad de boletas",""));
var edad = parseInt(prompt("Ingresa la edad ",""));

var precio = cantBoletas * 10000;



if(edad <= 5 ){
    alert("No se permiten menores de 5 años");
    


}else if(edad <= 14){
    descuento = precio * 0.35;

}else if(edad <= 19){
    descuento = precio * 0.25;

}else if(edad <= 45 ){
    descuento = precio * 0.10;

}else if(edad <= 65){
    descuento = precio * 0.25;

}else if(edad >= 65){
    descuento = precio * 0.30;
}

total = precio - descuento;
// precio = 10000 - descuento;


// alert("El precio de la boleta es de: " + precio);
alert("El descuento es de: " + descuento);
alert("El precio de la boleta con descuento es de: " + total);

 





// total <= (10000 * cantBoletas);
// descuento <= total * 0.35;
// vip <= vip + descuento;

// alert("El total a pagar es de: " + total);

// alert("El descuento vip es de: " + vip);
// alert("El descuento estandar es de: " + estandar);
// alert("El descuento popular es de: " + popular);
// alert("El descuento sencilla es de: " + sencilla);



// var edad = parseInt(prompt("Ingresa la edad del niño",""));


