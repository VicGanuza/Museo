define([
  'jquery',
  'underscore',
  'backbone',
  'models/videos/videosModel',
  'collections/videos/VideosCollection',
  'views/videos/VideosListView',
  'text!templates/videos/videosTemplate.html'
], function($, _, Backbone, VideosModel, VideosCollection, VideosListView, videosTemplate){

  var VideosView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.izquierda li').removeClass('active');
      $('.izquierda li a[href="'+window.location.hash+'"]').parent().addClass('active');
      
      this.$el.html(videosTemplate);

      var videosCollection = new VideosCollection();  
      var videosListView = new VideosListView({ collection: videosCollection}); 
      
      videosListView.render(); 
      var footerView = new FooterView("contacto");
      footerView.render();

    }
  });

  return VideosView;
});
