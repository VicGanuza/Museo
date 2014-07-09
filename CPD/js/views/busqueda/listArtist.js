define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/busqueda/busqueda_artistas.html'
], function($, _, Backbone, artistaTemplate){

  var ArtistView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
    
    var data = {
        artistas: this.collection.models,
        _: _ 
      };

    var compiledTemplate = _.template(artistaTemplate, data);
    this.$el.html(compiledTemplate);
    
    }
    
  });

  return ArtistView;
  
});
