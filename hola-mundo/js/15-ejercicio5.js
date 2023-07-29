'use strict'

/*
Muestre todos los numeros divisores de un numero introducidos en un prompt
*/

var numero = parseInt(prompt("introduce un numero", 1));

for(var i = 1; i <= numero; i++){

    if(numero % i == 0){
        document.write("Divisor: " + i + "<br/>");
    };
};

    