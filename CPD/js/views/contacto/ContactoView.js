define([
  'jquery',
  'underscore',
  'backbone',
  'views/footer/FooterView',
  'text!templates/contacto/contactoTemplate.html'
], function($, _, Backbone/*, ContactoModel, ContactoCollection*/, FooterView, contactoTemplate){

  var ContactoView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
     
      $('.izquierda li').removeClass('active');
      $('.izquierda li a[href="'+window.location.hash+'"]').parent().addClass('active');
     
	  
      console.log("En contacto");
      this.$el.html(contactoTemplate);

      var footerView = new FooterView();
        footerView.render();

      }
     });

  return ContactoView;
});