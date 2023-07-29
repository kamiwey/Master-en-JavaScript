'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin"];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "Pascal");

console.log(nombres.length); // Devuelve el numero de items del array

/*
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length)
}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programacion del 2023</h1>");
document.write("<ul");

/*
for(var i = 0; i < lenguajes.length; i++){ // Muestra todos los elementos
    document.write("<li>" + lenguajes[i] + "</li>");
}

lenguajes.forEach((elemento, indice, arr) => { // muestra todos elementos
    console.log(arr);
    document.write("<li>" + indice + " - " + elemento + "</li>");
});
*/


for(let lenguaje in lenguajes){//recorrer elementos array
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul");

// Busquedas

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");//busca el ele.

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");// dice el indice

var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precio => precio >= 20);//indica si hay elementos que casan con lo que le pedimos con true or false