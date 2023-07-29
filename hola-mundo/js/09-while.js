'use strict'

// Bucle  WHILE

var year = 2023;

while(year <= 2051){
    //ejecuta esto
    console.log("Estamos en el ano: " + year);

    if(year == 2000){
        break;
    }

    year++;
}

// Do While

var years = 25;

do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;
}while(years > 25)