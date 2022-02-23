



var n;

var amarilla;
var roja;
var rosa;
var verde;
var azul;
var ResultP;

amarilla = 0;
roja = 0;
rosa = 0;
verde = 0;
azul = 0;



var d = parseInt(prompt("Ingresa el ultimo digito de la placa",""));
while(n > 0){
    
}

if(d == 1 || d == 2 ){
    amarilla = amarilla + 1;
}
if( d == 3 || d == 4){
    rosa = rosa + 1;
}

//' }}else{
//    d == 3 || d == 4 
//    rosa = rosa + 1;
// }

if( d == 5 || d == 6 ){
    roja = roja + 1;
}

if(d == 7 || d == 8){
    verde == verde + 1;
}

// }else{
//     d == 7 || d == 8
//     verde == verde + 1;
// }

if( d == 9 || d == 0){
    azul = azul + 1;
}

if( d >= 10 ){
    alert("digita un número valido");
    ResultP.innerText = "";
}



alert("Autos con ")
alert("calcomania amarilla: " + amarilla);
alert("calcomania roja: " + roja);
alert("calcomania rosa: " + rosa);
alert("calcomania verde: " + verde);
alert("calcomania azul: " + azul);