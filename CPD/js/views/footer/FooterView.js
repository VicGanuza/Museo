define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, footerTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#footer"),
    events: {
      'click .close': 'cerrar',
      'click .subir': 'subir'
    },

    cerrar: function(){
        $('#footer .descripcion').addClass('display_none');
        $('#footer h2').addClass('display_none');
        $('#footer p').addClass('display_none');
        $('.close').addClass('display_none');
        $('.subir').removeClass('display_none');
    },

    subir:function(){
      $('#footer .descripcion').removeClass('display_none');
      $('#footer h2').removeClass('display_none');
      $('#footer p').removeClass('display_none');
      $('.close').removeClass('display_none');
      $('.subir').addClass('display_none');
    },

    initialize: function() {

     
        this.titulo = "Son Digitales";
        this.subtitulo = "Plataforma para la Conservación de Obras de Arte Digital";
        this.desc = "En esta primera etapa la plataforma incluye obras de video arte y de arte sonoro de dos nodos de Bahía Blanca: los museos de arte MBA-MAC y el festival Bahía[in] sonora. De este modo conforma una red local.<br>";
        this.desc += "SON DIGITALES conserva, archiva y permite el acceso a las obras.<br> ";
        this.desc += "La conservación se da a través del almacenamiento de las creaciones en un servidor propio y de la incorporación de información contextual sobre su producción y reproducción. El acceso se da por dos vias: la reproducción on line y la descarga en máxima calidad.<br>";
        this.desc += "SON DIGITALES estará en constante crecimiento con la incorporación de nuevas obras y nuevos nodos a su red.<br>";

      

      
/*
      var that = this;
      var options = {query: 'thomasdavis'}
     

      var onDataHandler = function(collection) {
          that.render();
      }

      this.model = new OwnerModel(options);
      this.model.fetch({ success : onDataHandler, dataType: "jsonp"});*/

    },

    render: function(){

      var data = {
          titulo : this.titulo,
          subtitulo : this.subtitulo,
          description: this.desc,
        _: _ 
      };

      var compiledTemplate = _.template( footerTemplate, data );
      this.$el.html(compiledTemplate);
    }

  });

  return FooterView;
  
});
