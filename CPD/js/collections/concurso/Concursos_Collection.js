define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel'
], function($, _, Backbone, ConcursoModel){
  var ConcursoCollection = Backbone.Collection.extend({
    model: ConcursoModel,
    
    initialize: function(){
    }

  });
 
  return ConcursoCollection;
});
