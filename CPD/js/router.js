// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/contacto/ContactoView',
  'views/obra/ObraView',
  'views/right/RightView',
  'views/right/DetalleConcursoView',
  'views/busqueda/biografia',
  'views/proyecto/ProyectoView',
  'views/creditos/CreditosView'
], function($, _, Backbone, HomeView, ContactoView, ObraView, RightView, DetalleView, BioView, ProyectoView, CreditosView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'contacto':'showContacto',
      'obra/:id':'showObra',
      'premio/:id':'showPremios',
      'proyecto':'showProyecto',
      'creditos':'showCreditos',
      'artista/:id': 'showBio',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
   
    app_router.on('route:showContacto', function(){
   
        // Call render on the module we loaded in via the dependency array
        var contactoView = new ContactoView();
        contactoView.render();

    });

    app_router.on('route:showObra', function(id){
      console.log(id);
   
        // Call render on the module we loaded in via the dependency array
        var obraView = new ObraView();
        obraView.render(id);

    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    app_router.on('route:showPremios', function(id){
        // Call render on the module we loaded in via the dependency array
        var premiosView = new DetalleView();
        premiosView.render(id);

    });

     app_router.on('route:showProyecto', function(id){
        // Call render on the module we loaded in via the dependency array
        var proyectoView = new ProyectoView();
        proyectoView.render(id);

    });

 	  app_router.on('route:showCreditos', function(id){
        // Call render on the module we loaded in via the dependency array
        var creditosView = new CreditosView();
        creditosView.render(id);

    });

    app_router.on('route:showBio', function(id){
        // Call render on the module we loaded in via the dependency array
        var bioView = new BioView();
        bioView.render(id);
    });


    var rightView = new RightView();
    rightView.render();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
