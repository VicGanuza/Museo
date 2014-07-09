define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/busqueda/bio_artistas.html'
], function($, _, Backbone, bioTemplate){

  var BioArtistView = Backbone.View.extend({
    el: $("#page"),

    render: function(){

    var data = {
        artista: this.collection.models,
        _: _ 
      };

    var compiledTemplate = _.template(bioTemplate, data);
    this.$el.html(compiledTemplate);
    
    }
    
  });

  return BioArtistView;
  
});
