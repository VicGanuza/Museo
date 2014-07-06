define([
  'jquery',
  'underscore',
  'backbone',
  'models/sonoros/SonorosModel'
], function($, _, Backbone, SonorosModel){
  var SonorosCollection = Backbone.Collection.extend({
    model: SonorosModel,
    
    initialize: function(){

      //this.add([project0, project1, project2, project3, project4]);

    }

  });
 
  return SonorosCollection;
});
