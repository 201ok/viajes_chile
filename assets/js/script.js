
//Se inicializa función "document ready, para aplicar funcionalidad de js sobre nuestro proyecto"
$(function(){

//Se aplica la función de Smooth Scroll sobre elemento a
  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 900, function(){
        window.location.hash = gato;
      });
    }
  });
// se habilita uso de popover en el proyecto según documentación de bootstrap
  $('[data-toggle="popover"]').popover();

  // se habilita uso de tooltip en el proyecto según documentación de bootstrap

  $('[data-toggle="tooltip"]').tooltip()


// Se agregar acción para que desaparezcan los parrafos al hacerle doble click

  $("p").dblclick(function(){
    $(this).hide('slow');
    });

// Se agrega acción que modifica el color de los iconos al realizarle un click

    $("i").click(function(){
      $(this).css({
      "color": "#f0ad4e",
      });
      
      });
    

});

