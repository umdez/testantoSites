'use strict'

Visao.LogoBotoes = Backbone.View.extend({

  initialize: function () {
    this.render();
  },

  render: function () {
    
    // Renderiza este template
    $(this.el).html(this.template({ imagem: Global.utilitarios.pegarImagemB64('logo.jpg', 'IMAGEMS_LOGO') }));
    
    return this;
  },

  /* EVENTOS DA NOSSA VISÃO
  ---------------------------------------------*/
  events: {
    "click button#btaoResultados": "aoClicarBtoResultados"
  },
  
  /* @funcao aoClicarBtoResultados()
   * @descricao funcao chamada logo após ser disparado o evento de clique no botao de resultados. */
  aoClicarBtoResultados: function() {
    
  },
  
  /* @função iniciarComponentes()
   * @descrição Iniciamos componentes para esta visão. 
   *  Os componentes podem ser do bootstrap, jQuery e outros frameworks utilizados
   */ 
  iniciarComponentes: function(){
    
    // Iniciamos o botão de resultados.
    $( "button#btaoResultados").button();
    
  },
  
  /* @função iniciarEscutaEventos()
   * @descrição Iniciamos as escutas de eventos para esta visão. 
   *  Os eventos podem ser de elementos do bootstrap, jQuery e outros frameworks utilizados
   */ 
  iniciarEscutaEventos: function() {
    
  }

});