define([
  'jquery',
  'underscore',
  'backbone',
  'views/busqueda/buscador',
  'text!templates/creditos/creditosTemplate.html'
], function($, _, Backbone, BuscadorView, creditosTemplate){

  var CreditosView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
     
      $('.izquierda li').removeClass('active');
      $('.izquierda li a[href="'+window.location.hash+'"]').parent().addClass('active');
     
	  
      console.log("creditos");
      this.$el.html(creditosTemplate);

      var buscadorView = new BuscadorView();
      buscadorView.render();

      }
     });

  return CreditosView;
});