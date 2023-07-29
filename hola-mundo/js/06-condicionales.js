'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo

var edad1 = 30;
var edad2 = 42;


// Si pasa esto
if(edad1 > edad2){
    //Ejecuta esto
    console.log("Edad1 es mayor que edad2");
}else{
    console.log("Edad2 es mayor que edad1");
}

/*
---------------------------
 Operadores relacionales 
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

var edad = 19;
var nombre = "Paco Jones";

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " anos, es mayor de edad");

    if(edad <= 33){
        console.log("Todavia eres millenial");
    }else if(edad >=70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres millenial");
    }

}else{
    // Es menor de edad
    console.log(nombre + " tiene " + edad + " anos, es un menor");
}

/*
    Operadores logicos
    AND(Y): &&
    OR(O): ||
    Negacion: !
*/

var year = 2023;

//Negacion

if(year != 2016){
    console.log("El ano no es 2016, realmente es: " + year);
};

// AND
if(year >= 2000 && year <=2025){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
};

// OR
if(year == 2013 || year == 2023){
    console.log("El ano acaba en 3");
}
