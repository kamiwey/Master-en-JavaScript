type alfanumerico = string | number;

// String
// let cadena: string | number = "kamiwey.es";
let cadena: alfanumerico = "kamiwey.es";
cadena = 12;

// Number
let numero: number = 12;

// Boleano
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = "hola";
cualquiera = 77;

// Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

let years: number[] = [12, 33, 45];

// Let vs Var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}

console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);