define([
  'jquery',
  'underscore',
  'backbone',
  'views/busqueda/artista',
  'views/busqueda/obraBusq',
  'text!templates/busqueda/buscadorTemplate.html'
], function($, _, Backbone, ArtistaView, ObrasView, buscadorTemplate){

  var buscadorView = Backbone.View.extend({
    el: $("#buscador"),
    events:{
      'click .artistas': 'buscar_artistas',
      'click .obras': 'buscar_obras'

    },

    buscar_artistas: function(){
      var artistaView = new ArtistaView();
      artistaView.render();
    },

    buscar_obras: function(){
      var obrasView = new ObrasView();
      obrasView.render();
    },


    render: function(){
      var compiledTemplate = _.template( buscadorTemplate);
      this.$el.html(compiledTemplate);
    }

  });

  return buscadorView;
  
});
