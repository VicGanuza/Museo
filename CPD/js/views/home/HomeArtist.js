define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, homeTemplate){

  var HomeArtist = Backbone.View.extend({
    el: $("#page"),

    render: function(){
    
    var data = {
        obra: this.collection.models,
        _: _ 
      };

    var compiledTemplate = _.template(homeTemplate, data);
    this.$el.html(compiledTemplate);
    
    }
    
  });

  return HomeArtist;
  
});
