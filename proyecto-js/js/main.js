$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){

        $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    };
    

    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el '+ moment().format("dddd Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sollicitudin leo. Vestibulum vel libero ante. In non faucibus lectus. Vivamus fermentum odio vel est sollicitudin tristique. Nunc sit amet tortor ut lectus auctor rhoncus. Duis luctus elementum erat consectetur porta. Integer sollicitudin vulputate ultrices. Vivamus aliquet arcu et nunc placerat pellentesque. Nullam libero justo, finibus vel vulputate et, consectetur pulvinar nisl. Maecenas et mollis turpis. Nam finibus dolor ut ultricies elementum. Curabitur venenatis diam et nibh luctus, ac volutpat lectus ornare.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el '+ moment().format("dddd Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sollicitudin leo. Vestibulum vel libero ante. In non faucibus lectus. Vivamus fermentum odio vel est sollicitudin tristique. Nunc sit amet tortor ut lectus auctor rhoncus. Duis luctus elementum erat consectetur porta. Integer sollicitudin vulputate ultrices. Vivamus aliquet arcu et nunc placerat pellentesque. Nullam libero justo, finibus vel vulputate et, consectetur pulvinar nisl. Maecenas et mollis turpis. Nam finibus dolor ut ultricies elementum. Curabitur venenatis diam et nibh luctus, ac volutpat lectus ornare.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el '+ moment().format("dddd Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sollicitudin leo. Vestibulum vel libero ante. In non faucibus lectus. Vivamus fermentum odio vel est sollicitudin tristique. Nunc sit amet tortor ut lectus auctor rhoncus. Duis luctus elementum erat consectetur porta. Integer sollicitudin vulputate ultrices. Vivamus aliquet arcu et nunc placerat pellentesque. Nullam libero justo, finibus vel vulputate et, consectetur pulvinar nisl. Maecenas et mollis turpis. Nam finibus dolor ut ultricies elementum. Curabitur venenatis diam et nibh luctus, ac volutpat lectus ornare.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el '+ moment().format("dddd Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sollicitudin leo. Vestibulum vel libero ante. In non faucibus lectus. Vivamus fermentum odio vel est sollicitudin tristique. Nunc sit amet tortor ut lectus auctor rhoncus. Duis luctus elementum erat consectetur porta. Integer sollicitudin vulputate ultrices. Vivamus aliquet arcu et nunc placerat pellentesque. Nullam libero justo, finibus vel vulputate et, consectetur pulvinar nisl. Maecenas et mollis turpis. Nam finibus dolor ut ultricies elementum. Curabitur venenatis diam et nibh luctus, ac volutpat lectus ornare.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el '+ moment().format("dddd Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sollicitudin leo. Vestibulum vel libero ante. In non faucibus lectus. Vivamus fermentum odio vel est sollicitudin tristique. Nunc sit amet tortor ut lectus auctor rhoncus. Duis luctus elementum erat consectetur porta. Integer sollicitudin vulputate ultrices. Vivamus aliquet arcu et nunc placerat pellentesque. Nullam libero justo, finibus vel vulputate et, consectetur pulvinar nisl. Maecenas et mollis turpis. Nam finibus dolor ut ultricies elementum. Curabitur venenatis diam et nibh luctus, ac volutpat lectus ornare.'
            },
        ];

        posts.forEach((item, index) =>{
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
            `;
            $("#post").append(post);

        });
    };

    // Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'> Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload(); 
        });
    };
    
    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    };

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
        
    };

    // Validacion
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTopOnError: true
        });
    };

});