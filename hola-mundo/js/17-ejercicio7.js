'use strict'

/*
 Tabla de multiplicar de numero introducido por pantalla
*/

var numero = parseInt(prompt("De que numero quieres la tabla? ", 1));

document.write("<h1>Tabla del " + numero + "</h1>");

for(var i = 1; i <= 10; i++){
    document.write(numero + " x " + i + " = " + (i*numero) + "<br/>");
}

//Todas las tabals de multiplicar

for(var c = 1; c <= 10; c++){
    document.write("<h1>Tabla del " + c + "</h1>");

    for(var i = 1; i <= 10; i++){
        document.write(i + " x " + c + " = " + (i*c) + "<br/>");
    }
}