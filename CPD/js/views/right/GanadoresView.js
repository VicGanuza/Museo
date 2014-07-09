define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/right/ganadoresTemplate.html'
], function($, _, Backbone, ganadoresTemplate){

  var GanadoresView = Backbone.View.extend({
    el: $("#panel_categorias"),
    render: function(){
     $('#panel_categorias div').removeClass('active_right');
     $('#panel_categorias div a[href="'+window.location.hash+'"]').parent().addClass('active_right'); 

      var data = {
        obras: this.collection.models,
        _: _ 
      };
      
      var compiledTemplate = _.template( ganadoresTemplate, data );
     $("#panel_categorias").html( compiledTemplate ); 

    }
  });

  return GanadoresView;
});
