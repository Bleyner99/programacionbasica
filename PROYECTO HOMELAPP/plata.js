



var pago = 100;
var pre;

pago = parseInt(prompt("Ingresa pago:"))


if(pago == 100 ){
    alert("Toma tu producto " + pago);
}

if(pago >= pre ){
 alert(`El cambio es: ${pago-pre}`);

}else{
    alert(`Te falta ${pre - pago} No puedes hacer la compra`);
}



