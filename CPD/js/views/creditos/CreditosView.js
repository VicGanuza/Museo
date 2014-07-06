define([
  'jquery',
  'underscore',
  'backbone',
/*  'models/contacto/ContactoModel',
  'collections/contacto/ContactoCollection',*/
  'text!templates/creditos/creditosTemplate.html'
], function($, _, Backbone/*, ContactoModel, ContactoCollection*/, creditosTemplate){

  var CreditosView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
     
      $('.izquierda li').removeClass('active');
      $('.izquierda li a[href="'+window.location.hash+'"]').parent().addClass('active');
     
	  
      console.log("creditos");
      this.$el.html(creditosTemplate);

      }
     });

  return CreditosView;
});