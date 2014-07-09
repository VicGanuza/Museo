define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel',
  'views/busqueda/obras',
  'collections/concurso/Concursos_Collection',
], function($, _, Backbone, ConcursoModel, ListObraView, ConcursoCollection){

  var BusqObraView = Backbone.View.extend({
    el: $("#page"),
    render: function(){

      var total=[];
      $.ajax({
          url:   'php/obra_busq.php',
          type:  'post',
          success:  function (response) {
                   
           var dataJson = eval(response);
  
           for(var i in dataJson){
             var dato = new ConcursoModel({
               id: dataJson[i].Id,
               nombre: dataJson[i].Nombre,
               autor: dataJson[i].Autor
             });
             total.push(dato);
           }
           var list_collection = new ConcursoCollection(total);
           var obra_list = new ListObraView({collection: list_collection});
           obra_list.render();
          }
      });
    }
  });

  return BusqObraView;
});