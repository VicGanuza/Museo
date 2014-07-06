define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/right/ganadoresTemplate.html'
], function($, _, Backbone, ganadoresTemplate){

  var GanadoresView = Backbone.View.extend({
    el: $("#panel_categorias"),
    render: function(){
      console.log('GanadoresView');
      //console.log($('#panel_categorias div'));
       $('#panel_categorias div').removeClass('active_right');
     $('#panel_categorias div a[href="'+window.location.hash+'"]').parent().addClass('active_right'); 
    console.log(this.collection);
      
      var data = {
        obras: this.collection.models,
        _: _ 
      };
      
      var compiledTemplate = _.template( ganadoresTemplate, data );
      //var videosListView = new VideosListView({ collection: videosCollection}); 
     $("#panel_categorias").html( compiledTemplate ); 
      //videosListView.render(); 

    }
  });

  return GanadoresView;
});
