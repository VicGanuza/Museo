define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/entrevistas/eva_revelde.html',
  'text!templates/entrevistas/instancias_vertigo.html',
  'text!templates/entrevistas/compresion.html',
  'text!templates/entrevistas/historia_polvora.html',
  'text!templates/entrevistas/indeleble.html',
  'text!templates/entrevistas/alucinogeno.html',
  'text!templates/entrevistas/metamorfosis.html',
  'text!templates/entrevistas/pacha_mama.html',
  'text!templates/entrevistas/intemperie.html',
  'text!templates/entrevistas/alicia.html',
  'text!templates/entrevistas/infinitos.html',
  'text!templates/entrevistas/ejercicio_violencia.html',
  'text!templates/entrevistas/mind.html',
  'text!templates/entrevistas/aguas_abismales.html',
  'text!templates/entrevistas/mundus_imaginaris.html',
  'text!templates/entrevistas/mapundungun.html',
  'text!templates/entrevistas/gesto_indice.html',
  'text!templates/entrevistas/espiritus_desierto.html',
  'text!templates/entrevistas/historia_distancia.html',
  'text!templates/entrevistas/REM.html',
  'text!templates/entrevistas/ruinas_uno.html',
  'text!templates/entrevistas/ruinas_dos.html',

], function($, _, Backbone, evaTemplate, vertigoTemplate, compresionTemplate, historiaTemplate, indelebleTemplate, alucinogenoTemplate,
metamorfosisTemplate, pacha_mamaTemplate, intemperieTemplate, aliciaTemplate, infinitosTemplate, ejercicio_violenciaTemplate, mindTemplate,
aguas_abismalesTemplate, mundusTemplate, mapundungunTemplate, indiceTemplate, espiritusTemplate, historia_distanciaTemplate, remTemplate, 
ruinas_unoTemplate, ruinas_dosTemplate){

  var entrevistaView = Backbone.View.extend({
    el: $("#page"),
    
    render: function(id){

      switch(id){
        case "1": var compiledTemplate = _.template(evaTemplate);
                  this.$el.html(compiledTemplate);
                  break;
        case "2": var compiledTemplate = _.template(vertigoTemplate);
                this.$el.html(compiledTemplate);
                break;
        case "4": var compiledTemplate = _.template(compresionTemplate);
                this.$el.html(compiledTemplate);
                break;
        case "9": var compiledTemplate = _.template(historiaTemplate);
                this.$el.html(compiledTemplate);
                break;
        case "10": var compiledTemplate = _.template(indelebleTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "11": var compiledTemplate = _.template(alucinogenoTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "12": var compiledTemplate = _.template(metamorfosisTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "13": var compiledTemplate = _.template(pacha_mamaTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "14": var compiledTemplate = _.template(intemperieTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "15": var compiledTemplate = _.template(aliciaTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "16": var compiledTemplate = _.template(infinitosTemplate);
                 this.$el.html(compiledTemplate);
                 break;          
        case "17": var compiledTemplate = _.template(ejercicio_violenciaTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "18": var compiledTemplate = _.template(mindTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "28": var compiledTemplate = _.template(aguas_abismalesTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "22": var compiledTemplate = _.template(mundusTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "23": var compiledTemplate = _.template(mapundungunTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "24": var compiledTemplate = _.template(indiceTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "29": var compiledTemplate = _.template(espiritusTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "30": var compiledTemplate = _.template(historia_distanciaTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "31": var compiledTemplate = _.template(remTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "33": var compiledTemplate = _.template(ruinas_unoTemplate);
                 this.$el.html(compiledTemplate);
                 break;
        case "35": var compiledTemplate = _.template(ruinas_dosTemplate);
                 this.$el.html(compiledTemplate);
                 break;
      }
    }
      

  });

  return entrevistaView;
  
});
