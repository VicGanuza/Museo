define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel',
  'collections/concurso/Concursos_Collection',
  'views/right/GanadoresView',
  'text!templates/right/rightContentTemplate.html'
], function($, _, Backbone, ConcursoModel, ConcursoCollection, ganadoresView,rightContentTemplate){

  var DetalleView = Backbone.View.extend({
    el: $('#panel_categorias'),

    render: function(id){
      console.log(id);

     $('#panel_contenidos li').removeClass('active_right');
     $('#panel_contenidos li a[href="'+window.location.hash+'"]').parent().addClass('active_right'); 
    

     $('#nivel1_down').addClass('left_doble_negativo');
     //var compiledTemplate = _.template(rightContentTemplate, data); 
     // this.el.html(compiledTemplate);
     //$('#panel_categorias').html(compiledTemplate);

     if (id==1){
        concurso = "'"+"Bienal Nacional"+"'";
        anio = 2013;
     }

     else {
      if (id==2) {
         concurso= "'"+"Bahia [in] Sonora"+"'";
         anio= 2013;
      }
      else {
        if (id==3){
          concurso= "'"+"Bienal Regional"+"'";
          anio= 2014;
        }
        else {
          concurso= "'"+"Bahia [in] Sonora"+"'";
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
        // $("#resultado").html(response);
       //alert(response);
      
       var dataJson = eval(response);

       for(var i in dataJson){
         var dato = new ConcursoModel({
           tag: dataJson[i].id,
           titulo: dataJson[i].Titulo,
           premio: dataJson[i].Premio,
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

  }

  });

  return DetalleView;
  
});