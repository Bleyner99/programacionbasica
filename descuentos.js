//const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularPrecioConPromocion(resultado, promocion){
  const precioConPromocion = 0 - promocion;
  precioConPromocion = resultado - 0 ;
}

function onClickButtonPriceDiscount() {
  const coupons = [
      "NNSS",
      "RRTT",
      "PPP",
      "Yeiner",
      "Bleyner",
      ","
    
  ];

  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  

  let descuento;


  
   if (couponValue == "") return alert("digite campos vacíos");

   if (priceValue == "") return alert("digite campos vacíos");

  //  if (couponValue == "Bleyner") return alert("mmmm");

  
  if(couponValue == "Bleyner"){
   
    
    
   
   }



  //  if (priceValue = "Yeiner") return alert("Ojo que es de San Cristobal");
  //  resultP.innerText = "";

    switch(couponValue) {
    // document.getElementById('').src = '';  
    case coupons[0]: // "NNSS"
      descuento = 19;
    break;
    case coupons[1]: // "RRTT"
      descuento = 30;
    break;
    case coupons[2]: // "PPP"
      descuento = 25;
    break;
    case coupons[3]: // "PPP"
       alert("Ojo que es de San Cristobal")
       resultP.innerText = "";
    break;
    // case coupons[4]: // "PPP"
    
    
    // break;

    
  }
                                       

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    

  const resultP = document.getElementById("ResultP");
    if(coupons.includes(couponValue)){
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    
     }else{
    alert("cupón inválido")
    resultP.innerText = "";
}
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });