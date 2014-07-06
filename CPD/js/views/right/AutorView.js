define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/right/rightMenuTemplate.html'
], function($, _, Backbone, rightMenuTemplate){

  var AutorView = Backbone.View.extend({
    el: $("#right_panel"),

    render: function(){
      console.log('en Autor View');

    var data = {
        autor: this.collection.models,
        _: _ 
      };

    var compiledTemplate = _.template(rightMenuTemplate, data);
    this.$el.html(compiledTemplate);
    
    }
    
  });

  return AutorView;
  
});
