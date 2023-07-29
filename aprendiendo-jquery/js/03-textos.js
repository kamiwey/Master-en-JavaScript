$(document).ready(function(){

    reloadLinks();

    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
            $('#menu').append('<li><a href="' + $("#add_link").val() + '"></a></li>');

            $("#add_link").val(' ');
            reloadLinks();
    });

    // Metodos: Html, append, prepend, before, after, 
    
});

function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = $(this).attr("href");

        that.attr('target', 'blank');
        that.removeAttr()

        that.text(enlace);
    });
};