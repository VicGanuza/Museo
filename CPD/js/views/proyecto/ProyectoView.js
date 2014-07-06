define([
  'jquery',
  'underscore',
  'backbone',
/*  'models/contacto/ContactoModel',
  'collections/contacto/ContactoCollection',*/
  'text!templates/proyecto/proyectoTemplate.html'
], function($, _, Backbone/*, ContactoModel, ContactoCollection*/, proyectoTemplate){

  var ProyectoView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
     
      $('.izquierda li').removeClass('active');
      $('.izquierda li a[href="'+window.location.hash+'"]').parent().addClass('active');
     
	  
      console.log("En contacto");
      this.$el.html(proyectoTemplate);

      }
     });

  return ProyectoView;
});