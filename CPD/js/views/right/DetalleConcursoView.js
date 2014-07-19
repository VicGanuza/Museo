define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel',
  'collections/concurso/Concursos_Collection',
  'views/right/GanadoresView',
  'views/busqueda/buscador',
  'text!templates/right/rightContentTemplate.html'
], function($, _, Backbone, ConcursoModel, ConcursoCollection, ganadoresView, BuscadorView, rightContentTemplate){

  var DetalleView = Backbone.View.extend({
    el: $('#panel_categorias'),

    render: function(id){
      console.log(id);

     $('#panel_contenidos li').removeClass('active_right');
     $('#panel_contenidos li a[href="'+window.location.hash+'"]').parent().addClass('active_right'); 
    

     $('#nivel1_down').addClass('left_doble_negativo');

     if (id==1){
        concurso = "Bienal";
        anio = 2013;
     }

     else {
      if (id==2) {
         concurso= "Bahia";
         anio= 2013;
      }
      else {
        if (id==3){
          concurso= "Bienal";
          anio= 2014;
        }
        else {
          concurso= "Bahia";
          anio= 2014;
        }
      }
    }

    var parametros = {
          "concurso" : concurso,
          "anio" : anio
        }; 
    
    var total=[];
    $.ajax({
      data:  parametros,
      url:   'php/librerias.php',
      type:  'post',
      success:  function (response) {
      
       var dataJson = eval(response);

       for(var i in dataJson){
          if (concurso=="Bahia"){
            premio= null;
          }
          else{
            premio=dataJson[i].Premio;
          }
         var dato = new ConcursoModel({
           tag: dataJson[i].id,
           titulo: dataJson[i].Titulo,
           premio: premio,
           tipo: dataJson[i].Tipo,
           lugar: dataJson[i].Lugar,
           autores: dataJson[i].Autores
         });
       total.push(dato);
       }

      var list_collection = new ConcursoCollection(total);
      var list_obras = new ganadoresView({collection: list_collection});
      list_obras.render();
      }  


    });
    var buscadorView = new BuscadorView();
      buscadorView.render();

  }

  });

  return DetalleView;
  
});