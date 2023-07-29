'use strict'

// Array Multidimensionales
// Son arrays dentro de otro array

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Avatar'];

peliculas.sort();//ordena elementos array orden alfabetico
peliculas.reverse();//ordena elementos de atras a alante

console.log(peliculas);

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

/*
var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop();// Elimina ultimo elemento del array
*/

//peliculas.push("Batman"); // anade elemento al array

var indice = peliculas.indexOf('Avatar');//busca el elemento Avatar
if(indice > -1){
    peliculas.splice(indice, 1);//Borra a partir del elemento seleccionado
}

var peliculas_string = peliculas.join();//convierte array en un string 

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ") //convierte elementos string en array

console.log(peliculas);
console.log(peliculas_string);

console.log(cadena_array);