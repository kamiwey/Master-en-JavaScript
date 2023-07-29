'use strict'

// Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion
// function calculadora(numero1, numero2, mostrar = false){

//     // Conjunto de instrucciones a ejecutar

//     if(mostrar == false){
//         console.log("Suma: " + (numero1+numero2));
//         console.log("Resta: " + (numero1-numero2));
//         console.log("Multiplicacion: " + (numero1*numero2));
//         console.log("Division: " + (numero1/numero2));
//         console.log("***************************");
//     }else{
//         document.write("Suma: " + (numero1+numero2) + "<br/>");
//         document.write("Resta: " + (numero1-numero2)+ "<br/>");
//         document.write("Multiplicacion: " + (numero1*numero2)+ "<br/>");
//         document.write("Division: " + (numero1/numero2)+ "<br/>");
//         document.write("***************************" + "<br/>");
//     }
    

//     // return "Hola soy la calculadora!!";
// }

// console.log(calculadora);

// var resultado = calculadora();

//Invocar o llamar a la funcion

// calculadora(3, 5);
// calculadora(6, 5, true);



// calculadora(4, 7);
// calculadora(43, 67);

// console.log(resultado);

// for(var i = 1; i <= 10; i++){
//     console.log(i);
//     calculadora(i, 8);
// }

function porConsola(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("Division: " + (numero1/numero2));
    console.log("***************************");
}

function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1+numero2) + "<br/>");
    document.write("Resta: " + (numero1-numero2)+ "<br/>");
    document.write("Multiplicacion: " + (numero1*numero2)+ "<br/>");
    document.write("Division: " + (numero1/numero2)+ "<br/>");
    document.write("***************************" + "<br/>");
}

function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }

    return true;
}

calculadora(1, 4);
calculadora(2, 5, true);