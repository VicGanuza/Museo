define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/busqueda/busqueda_obras.html'
], function($, _, Backbone, obrasTemplate){

  var BusqObrasView = Backbone.View.extend({
    el: $("#page"),
    render: function(){


    var data = {
        obra: this.collection.models,
        _: _ 
      };

      var compiledTemplate = _.template(obrasTemplate, data);
      this.$el.html(compiledTemplate);

      }
     });

  return BusqObrasView;
});