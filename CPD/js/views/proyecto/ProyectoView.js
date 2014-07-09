define([
  'jquery',
  'underscore',
  'backbone',
  'views/busqueda/buscador',
  'text!templates/proyecto/proyectoTemplate.html'
], function($, _, Backbone, BuscadorView, proyectoTemplate){

  var ProyectoView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
     
      $('.izquierda li').removeClass('active');
      $('.izquierda li a[href="'+window.location.hash+'"]').parent().addClass('active');
     
	  
      console.log("En contacto");
      this.$el.html(proyectoTemplate);

       var buscadorView = new BuscadorView();
        buscadorView.render();

      }
     });

  return ProyectoView;
});