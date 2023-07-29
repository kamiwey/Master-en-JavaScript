'use strict'

/*
Programa que pida 2 numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir.
*/

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

// console.log(numero1, numero2);

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

if(numero1 > numero2){
    alert("El numero 1 es mayor al numero 2");
}else if(numero1 < numero2){
    alert("El numero 2 es mayor al numero 1");
}else{
    alert("El numero 1 es igual al numero 2");
}

