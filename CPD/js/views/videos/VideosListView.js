// Filename: views/Sonoros/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'models/videos/VideosModel',
  'collections/videos/videosCollection',
  'text!templates/videos/videosListTemplate.html'

], function($, _, Backbone, VideosModel, VideosCollection, videosListTemplate){/**/
  var videosListView = Backbone.View.extend({
    el: $("#videos-list"),

    render: function(){
   
      var data = {
        videos: this.collection.models,
        _: _ 
      };
console.log(data);
      var compiledTemplate = _.template( videosListTemplate, data );
      $("#videos-list").html( compiledTemplate ); 
    }
  });
  return videosListView;
});
