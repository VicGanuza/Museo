// Filename: views/Sonoros/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'models/sonoros/SonorosModel',
  'collections/sonoros/SonorosCollection',
  'text!templates/sonoros/sonorosListTemplate.html'

], function($, _, Backbone, SonorosModel, SonorosCollection, sonorosListTemplate){/**/
  var sonorosListView = Backbone.View.extend({
    el: $("#sonoros-list"),

    render: function(){
   
      var data = {
        sonoros: this.collection.models,
        _: _ 
      };

      var compiledTemplate = _.template( sonorosListTemplate, data );
      $("#sonoros-list").html( compiledTemplate ); 
    }
  });
  return sonorosListView;
});
