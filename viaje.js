function algoritmo()
{
    let IVA, numero_de_personas, subtotal, total ;

       numero_de_personas = parseFloat (document.formulario1.numero_de_personas.value);

     if( document.formulario1.numero_de_personas.value == "") return alert("digite campos vacíos cv");

       subtotal = numero_de_personas * 25000;

    IVA = subtotal* 0.12;
    total = subtotal + IVA;
    document.formulario1.IVA.value = IVA;
    document.formulario1.subtotal.value = subtotal;
    document.formulario1.total.value = total;
}


