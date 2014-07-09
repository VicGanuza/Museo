define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel',
  'collections/concurso/Concursos_Collection',
 'views/right/ContentRightView',
   'views/right/AutorView',
], function($, _, Backbone, ConcursoModel, ConcursoCollection, ContentView, AutorView){

  var RightView = Backbone.View.extend({
    el: $("#right_panel"),
    events: {
      'click .js-pane_top-open': 'abrir_panel_top',
      'click .js-pane_top-close': 'cerrar_panel_top',
      'click .js-pane_down-open': 'abrir_panel_down',
      'click .js-pane_down-close': 'cerrar_panel_down',
      'click .js-pane_descripcion-open': 'mostrar_descripcion'
    },

    abrir_panel_top: function(){
      $('#nivel1').removeClass('left_283');
      $('#icono_top').removeClass('content-nav--toggle-closed');
      $('#icono_top').removeClass('js-pane_top-open');
      $('header').addClass('nav-opened');
      $('#icono_top').addClass('js-pane_top-close');
      $('.inner_buscador').addClass('margin_rigth-330');
    },

    cerrar_panel_top: function(){
      $('#nivel1').addClass('left_283');
      $('header').removeClass('nav-opened');
      $('#nivel1').removeClass('left_negativo');
      $('#icono_top').addClass('content-nav--toggle-closed');
      $('#icono_top').addClass('js-pane_top-open');
      $('#icono_top').removeClass('js-pane_top-close');
      $('.inner_buscador').removeClass('margin_rigth-330');
    },

    abrir_panel_down: function(){
      $('#nivel1_down').removeClass('left_283');
      $('#icono_down').removeClass('content-nav--toggle-closed');
      $('#icono_down').removeClass('js-pane_down-open');
      $('#icono_down').addClass('js-pane_down-close');
      var content_menu = new ContentView();
      content_menu.render();
    },

    cerrar_panel_down: function(){
      $('#nivel1_down').addClass('left_283');
      $('#nivel1_down').removeClass('left_doble_negativo');
      $('#icono_down').addClass('content-nav--toggle-closed');
      $('#icono_down').addClass('js-pane_down-open');
      $('#icono_down').removeClass('js-pane_down-close');
    },

    subir:function(){
      $('#footer .descripcion').removeClass('display_none');
      $('#footer h2').removeClass('display_none');
      $('#footer p').removeClass('display_none');
      $('.close').removeClass('display_none');
      $('.subir').addClass('display_none');
    },
    mostrar_descripcion: function(){
      $('#nivel1').addClass('left_negativo');
    },

    render: function(id){
    	if (!id){
          var data = new ConcursoModel({
               autor : "Alejandro Thornton",
               colaboradores: "Paula, Pellejero",
               titulo: "Eva revelde",
               descripcion : "kjsfkldhasfjhasdfhasdklfhasdlkfhasdofhaskdfaskjdfhasjd fhasjhfiauwehskadjfhakjsdhaiuwehfaskjdfhaksjdhfaiewuhaf asdf as asdf asd a ",
               imagen: "Alejandro_Thornton.png",
               descripcion_autor: "Buenos Aires, 1970. <br> Graduado en la Escuela Nacional de Bellas Artes Pridiliano Pueyrredón, con una producción que aborda tanto el lenguaje pictórico, como la gráfica, la poesía visual y las intervenciones. Ha sido seleccionado en importantes premios y bienales tanto en Argentina como en el exterior.",
               descarga: "Torrents/Videos/Eva_rebelde_Pellejero_Thornton_2012_avi.zip",
               id_autor: 2,
               _: _ 
              });

        var list_collection = new ConcursoCollection(data);
     	  var autor = new AutorView({collection: list_collection});
     	  autor.render();

        }
        else{
        	var parametros = {
               "id" : id
             }; 
     
            $.ajax({
      	     	data:  parametros,
      	     	url:   'php/obras.php',
      	     	type:  'post',
      	     	success:  function (response) {
      	          	     	
      	     	 var dataJson = eval(response);
		     
      	     	 for(var i in dataJson){
      	     	   var data = new ConcursoModel({
      	     	     autor: dataJson[i].Autor,
                   colaboradores: dataJson[i].Colaboradores,
                   titulo: dataJson[i].Titulo,
      	     	     descripcion: dataJson[i].Descripcion,
      	     	     imagen: dataJson[i].Imagen,
      	     	     descripcion_autor: dataJson[i].Descripcion_Autor,
      	     	     descarga: dataJson[i].Descarga,
                   id_autor: dataJson[i].Id_autor
      	     	   });
      	     	 }
     
		           var list_collection = new ConcursoCollection(data);
	     	  	   var autor = new AutorView({collection: list_collection});
	     	  	   autor.render();
                }
            });
        }      
    }

  });

  return RightView;
  
});
