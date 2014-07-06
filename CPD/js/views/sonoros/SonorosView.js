define([
  'jquery',
  'underscore',
  'backbone',
  'models/sonoros/SonorosModel',
  'collections/sonoros/SonorosCollection',
  'views/sonoros/SonorosListView',
  'views/footer/FooterView',
  'text!templates/sonoros/sonorosTemplate.html'
], function($, _, Backbone, SonorosModel, SonorosCollection, SonorosListView, FooterView, sonorosTemplate){

  var SonorosView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.izquierda li').removeClass('active');
      $('.izquierda li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(sonorosTemplate);

      var sonoro0 = new SonorosModel({artista: 'Cristina Kasem ', titulo: 'Mundus imaginalis', residencia:'CABA, Buenos Aires'}); 
      var sonoro1 = new SonorosModel({artista:'Javier Ortiz', titulo: 'Mapundungun', residencia:'Bahia Blanca, Buenos Aires'}); 
      var sonoro2 = new SonorosModel({artista:'Federico Barabino', titulo: 'Acerca del gesto como índice de materia', residencia:'Merlo, Buenos Aires'}); 

      var aSonoro = [sonoro0, 
                     sonoro1,
                     sonoro2,
                    ];

      var sonorosCollection = new SonorosCollection(aSonoro);  
      var sonorosListView = new SonorosListView({ collection: sonorosCollection}); 
      
      sonorosListView.render(); 

       var footerView = new FooterView("novedades");
      footerView.render();

      }
     });

  return SonorosView;
});
