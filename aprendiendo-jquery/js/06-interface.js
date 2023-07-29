$(document).ready(function(){

    // Mover elemento por la pagina 
    $(".elemento").draggable();

    // Redimensionar elementos
    $(".elemento").resizable();

    // Seleccionar elementos
    // $(".lista-seleccionable").selectable();

    // Ordenar elemntos
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });

    // Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro");
        }
    });

    // Efectos: fade, explode, blind, slide, drop, fold, puff, scale, shake
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("fade", "slow");
    });

    // Tooltip
    $(document).tooltip();

    // Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });
    
    // Datepicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
});