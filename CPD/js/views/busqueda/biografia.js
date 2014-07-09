define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel',
  'views/busqueda/bioArtist',
  'collections/concurso/Concursos_Collection',
], function($, _, Backbone, ConcursoModel, ArtistBioView, ConcursoCollection){

  var BioView = Backbone.View.extend({
    el: $("#page"),
    render: function(id){

      console.log('En Biografria');

      parametros = {
        id: id
      }

      $.ajax({
          data: parametros, 
          url:   'php/biografia.php',
          type:  'post',
          success:  function (response) {
                   
           var dataJson = eval(response);
  
           for(var i in dataJson){
             var dato = new ConcursoModel({
               nombre: dataJson[i].Nombre,
               imagen: dataJson[i].Imagen,
               web: dataJson[i].Web,
               descripcion: dataJson[i].Descripcion
             });
           }
           var collection = new ConcursoCollection(dato);
           var artist_bio = new ArtistBioView({collection: collection});
           artist_bio.render();
          }
      });
    }
  });

  return BioView;
});