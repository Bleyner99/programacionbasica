//const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const coupons = [
      "NNSS",
      "RRTT",
      "PPP",
      "Yeiner",
  ];
 
   

  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;

   if (couponValue == "") return alert("digite campos vacíos");

   if (priceValue == "") return alert("digite campos vacíos");

    switch(couponValue) {
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
  }
  
  // class coupon {

  //    constructor({
  //   cupon,
  //    }) {
  //    this._cupon = cupon;  
 
  //    }

  //    get cupon() {
  //      return this._cupon;
  //    }
          
  //    set cupon(nuevoCupon){
  //      if (nuevoCupon === "xxx"){
  //        alert("va a explotar!!!")
  //      } else {
  //        this._name = nuevoCupon;
  //      }
  //    }
  // }

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