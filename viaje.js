function algoritmo(){
  const coupons = [
      "bleyner",  
  ];

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

 

{
    let IVA, numero_de_personas, subtotal, total ;

       numero_de_personas = parseFloat (document.formulario1.numero_de_personas.value);

     if( document.formulario1.numero_de_personas.value == "") return alert("digite campos vacíos cv");

    if(document.formulario1.numero_de_personas.value > 5){  
       alert("maximo 5 personas")
       return document.formulario1.IVA.value = "";
      //  document.formulario1.subtotal.value = "";
      //  document.formulario1.total.value = "";
    }


       subtotal = numero_de_personas * 25000;
      
    IVA = subtotal* 0.12;
    total = subtotal + IVA;
    document.formulario1.IVA.value = IVA;
    document.formulario1.subtotal.value = subtotal;
    document.formulario1.total.value = total;

    
}
switch(couponValue) {
    // document.getElementById('').src = '';  
    case coupons[0]: 
      alert("viaje gratis");
      document.formulario1.IVA.value = "0";
      document.formulario1.subtotal.value = "0";
      document.formulario1.total.value = "0";
      break;
      case coupons[0]:
        
  }

}

// const resultP = document.getElementById("ResultP");
//     if(coupons.includes(couponValue)){
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    
//      }else{
//     alert("cupón inválido")
//     resultP.innerText = "";
// }