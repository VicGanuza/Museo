define([
  'jquery',
  'underscore',
  'backbone',
  'models/videos/VideosModel'
], function($, _, Backbone, VideosModel){
  var VideosCollection = Backbone.Collection.extend({
    model: VideosModel,
    
    initialize: function(id){

      console.log(id);

      var video0 = new VideosModel({id:1,artista: 'Alejandro Thornton y Paula Pellejero', titulo: 'Eva rebelde', residencia:'CABA, Buenos Aires'}); 
      var video1 = new VideosModel({id:2,artista:'Florencia Levy', titulo: 'El Baqueano', residencia:'CABA, Buenos Aires'}); 
      var video2 = new VideosModel({id:3,artista:'Paula Buontempo', titulo: 'Las instancias del vértigo', residencia:'La Plata, Buenos Aires'}); 
      var video3 = new VideosModel({id:4,artista:'Marcos Calvari', titulo: 'Compresión a noventa y nueve veces de lo Irreversible', residencia:'Bahía Blanca, Buenos Aires'});

      if (id) { var collection = [ video0, video1, video2, video3 ];}
         else { var collection = [ video0, video1, video2, video3 ];}

      this.add(collection);
    }

  });
 
  return VideosCollection;
});
