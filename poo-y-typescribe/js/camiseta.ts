// Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
} 

// Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

    // Propiedades (caracteristicas del objeto)
    private color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    // Metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }


    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

// Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("dsfgs", "dsf", "esew", "ewrfwe", 43);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike", "Xl", 45);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");

console.log(sudadera_nike);

// var camiseta = new Camiseta("rojo", "manga larga", "nike", "XL", 30);
// camiseta.setColor("Rojo");
//camiseta.getColor();

// camiseta.color = "Rojo";
// camiseta.modelo = "Manga Larga";
// camiseta.marca = "Nike";
// camiseta.talla = "XL";
// camiseta.precio = 30;



