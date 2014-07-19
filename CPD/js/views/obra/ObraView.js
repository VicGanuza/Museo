define([
  'jquery',
  'underscore',
  'backbone',
  'views/right/RightView',
  'views/home/HomeView',
  'views/busqueda/buscador'
], function($, _, Backbone, RightView, HomeView, BuscadorView){

  var ObraView = Backbone.View.extend({
    el: $("#page"),
    render: function(id){

      $('#panel_categorias div.obra_detalle').removeClass('active_right');
      $('#panel_categorias div.obra_detalle a[href="'+window.location.hash+'"]').parent().addClass('active_right');
     
      var buscadorView = new BuscadorView();
      buscadorView.render();

      var menu_Right = new RightView();
      menu_Right.render(id);

      var home_View = new HomeView();
      home_View.render(id);

    }
  });

  return ObraView;
});
