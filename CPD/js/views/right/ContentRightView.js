define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel',
  'collections/concurso/ConcursosCollection',
  'text!templates/right/rightContentTemplate.html'
], function($, _, Backbone, ConcursoModel, ConcursoCollection, rightContentTemplate){

  var ContentView = Backbone.View.extend({
    el: $('#panel_contenidos'),
    render: function(){

     var  collection = new ConcursoCollection();
     var data = {
     	concursos: collection.models,
     	 _: _ 
      };    
        

      var compiledTemplate = _.template(rightContentTemplate, data); 
     // this.el.html(compiledTemplate);
      $('#panel_contenidos').html(compiledTemplate);
    }

  });

  return ContentView;
  
});