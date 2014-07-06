define([
  'jquery',
  'underscore',
  'backbone',
  'models/concurso/ConcursoModel'
], function($, _, Backbone, ConcursoModel){
  var ConcursoCollection = Backbone.Collection.extend({
    model: ConcursoModel,
    
    initialize: function(){

     var concurso1 = new ConcursoModel({nombre: 'Bienal Nacional', anio: '2013', tag:1}); 
     var concurso2 = new ConcursoModel({nombre: 'Bahia [in] Sonora', anio: '2013', tag:2 }); 
     var concurso3 = new ConcursoModel({nombre: 'Bienal Regional', anio: '2014', tag:3});
     var concurso4 = new ConcursoModel({nombre: 'Bahia [in] Sonora', anio: '2014', tag:4 });

     this.add([concurso1, concurso2, concurso3, concurso4]);

    
  }

});
 
  return ConcursoCollection;
});
