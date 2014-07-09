define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel',
  'views/busqueda/listArtist',
  'collections/concurso/Concursos_Collection',
], function($, _, Backbone, ConcursoModel, ListArtistView, ConcursoCollection){

  var BusqArtistView = Backbone.View.extend({
    el: $("#page"),
    render: function(){

      var total=[];
      $.ajax({
          url:   'php/artistas.php',
          type:  'post',
          success:  function (response) {
                   
           var dataJson = eval(response);
  
           for(var i in dataJson){
             var dato = new ConcursoModel({
               id: dataJson[i].Id,
               nombre: dataJson[i].Nombre,
               imagen: dataJson[i].Imagen
             });
             total.push(dato);
           }
           var list_collection = new ConcursoCollection(total);
           var artist_list = new ListArtistView({collection: list_collection});
           artist_list.render();
          }
      });
    }
  });

  return BusqArtistView;
});