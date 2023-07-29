'use strict'

// BOM - Browser Object Model

function getBom(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){//abre una nueva ventana
    window.open(url, "", "width=400,heigth=300");
}

getBom();
