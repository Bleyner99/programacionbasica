var x;
var n;
var horaExtra;
var salario;

var horas = parseInt(prompt("Ingresa el numero de horas trabajadas"));

if(horas <= 40){
    salario = horas * 20;
}else{
    horaExtra = horas - 40;
    salario = 40 * 20 + (horaExtra * 25);
}

alert("El salario del trabajador es: " + salario);


