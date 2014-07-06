define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel'
], function($, _, Backbone, ConcursoModel){
  var ConcursoCollection = Backbone.Collection.extend({
    model: ConcursoModel,
    
    initialize: function(){

      //this.add([project0, project1, project2, project3, project4]);

    }

  });
 
  return ConcursoCollection;
});
