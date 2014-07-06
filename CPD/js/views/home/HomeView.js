define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel',
  'views/home/HomeArtist',
  'views/footer/FooterView',
  'views/right/RightView',
  'collections/concurso/Concursos_Collection',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, ConcursoModel, HomeArtist, FooterView, RightView, ConcursoCollection,  homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(id){
	  
	  $('.izquierda li').removeClass('active');
    $('.izquierda li a[href="#"]').parent().addClass('active');

      if (!id){
      	var data = new ConcursoModel({
      		titulo:"Eva Rebelde",
      		descripcion_corta:"1er Premio Categoria Arte Bienal Nacional de Bahia Blanca 2013. Seleccion Festival Bahia in sonoro 2013.",
      		frame:'<iframe src="//player.vimeo.com/video/98025000" width="80%" height="550" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/98025000">Eva rebelde - Paula Pellejero Alejandro Thornton</a> from <a href="http://vimeo.com/user29040311">Son Digitales</a> on <a href="https://vimeo.com">Vimeo</a>.</p>'
      	});

      	var list_collection = new ConcursoCollection(data);
        var obra_desc = new HomeArtist({collection: list_collection});
        obra_desc.render();

        var footerView = new FooterView();
        footerView.render();
        
        var rightView = new RightView();
        rightView.render();
       
      }

      else{

      	var parametros = {
               "id" : id,
             }; 
     
            $.ajax({
      	     	data:  parametros,
      	     	url:   'php/obras.php',
      	     	type:  'post',
      	     	success:  function (response) {
      	     	  // $("#resultado").html(response);
      	     	 //alert(response);
      	     	
      	     	 var dataJson = eval(response);
		     
      	     	 for(var i in dataJson){
      	     	   var data = new ConcursoModel({
      	     	     titulo: dataJson[i].Titulo,
      	     	     descripcion_corta: dataJson[i].Descripcion_Corta,
      	     	     frame: dataJson[i].frame
      	     	   });

      	     	   var list_collection = new ConcursoCollection(data);
			           var obra_desc = new HomeArtist({collection: list_collection});
			           obra_desc.render();

                 var footerView = new FooterView();
                footerView.render();
      	     	 }
      	     	}
      	     });

      }

      

    }
    
  });

  return HomeView;
  
});
