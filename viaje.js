function algoritmo(){
  const coupons = [
      "bleyner", 
      "aldair", 
  ];


  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

{
    let IVA, numero_de_personas, subtotal, total;

       numero_de_personas = parseFloat (document.formulario1.numero_de_personas.value);

     if( document.formulario1.numero_de_personas.value == "") return alert("digite campos vacíos cv");

    if(document.formulario1.numero_de_personas.value > 5){  
       alert("máximo 5 personas")
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
      case coupons[1]:
      alert("coge una caluladora y resta el 10% al total de la factura e ignora lo que te aparece en pantalla");
      
      break;
        
  }
 
  if(coupons.includes(couponValue)){
    resultP.innerText = "El resultado es de: $" + document.formulario1.total.value;
    
     }else{
    alert("cupón inválido")
    document.formulario1.IVA.value = "";
    document.formulario1.subtotal.value = "";
    document.formulario1.total.value = "";
    
    // resultP.innerText = "";
}
  //  if(coupons.includes(inputCoupon)){
  //    return document.formulario1.total.value = total;
   
  //  }else{
  //    alert("cupón invalido");
  // }

}