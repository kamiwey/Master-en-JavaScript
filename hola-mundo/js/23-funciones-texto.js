'use strict'

// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso"
var texto2 = "es muy buen curso";

// var dato = numero.toString(); // de numero a string
    // dato = texto1.toUpperCase(); // toUpperCase (Mayusculas) toLowerCase(minus)

// console.log(dato);

// Calcular longitud
// var nombre = "Kamiwey";
//     nombre = ["hola", "soy", "kami"];

// console.log(nombre.length); // cuenta el numero de elementos

// Concatenar - Unir textos

// var textoTotal = texto1 + texto2;
// var textoTotal = texto1.concat(texto2);

// console.log(textoTotal);

var busqueda = texto1.indexOf("curso"); //nos dice en que caracter esta la palabra
                                        //la primera vez que la encuentra

var busqueda = texto1.lastIndexOf("curso");// busca por el final

var busqueda = texto1.search("curso");

var busqueda = texto1.substring(5, 5);// busca coincidencias y muestra datos

var busqueda = texto1.charAt(44);// Selecciona una letra concreta de un string 

var busqueda = texto1.startsWith("Bi");// busca coincidencia en el principio del  string

var busqueda = texto1.endsWith("curso");// busca coincidencia en el final del  string

var busqueda = texto1.includes("curso");// busca y dice si es true or false

var busqueda = texto1.replace("JavaScript", "Symfony");//remplaza una palabra 

var busqueda = texto1.slice(14, 20);//Recorta por delante y detras de lo indicado

var busqueda = texto1.split(" ");// corta el string con el dato indicado

var busqueda = texto1.trim();// quita los espacios por delante y detras

console.log(busqueda);