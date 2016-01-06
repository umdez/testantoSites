'use strict'

/* @arquivo aplicativo.js */

define([
  'jquery',
  'roteador', // Requisitamos o arquivo roteador.js
  'backbone'
], function($, Roteador, Backbone){
  var inicializar = function(){
    
    var ponteSync = Backbone.sync;
    
    /* Sobrescreve o método sync() do Backbone com alcançe global. Estamos utilizando o serviço CORS.
     * @Veja http://naleid.com/blog/2012/10/29/overriding-backbone-js-sync-to-allow-cross-origin-resource-sharing-cors
     * Este método é utilizado para persistir o estado do modelo para o servidor. 
     *
     * @Parametro {Objeto} [metodo] O método utilizado.
     * @Parametro {Objeto} [modelo] O modelo do Backbone.
     * @Parametro {Objeto} [opcoes] Configuração de opções de requisição.
     */
    Backbone.sync = function(metodo, modelo, opcoes) {
      opcoes || (opcoes = {});
      
      // Habilitamos aqui o acesso a outros dominios.
      if (!opcoes.crossDomain) {
        opcoes.crossDomain = true;
      }
      // Agora deixamos claro a necessidade de credenciais.
      if (!opcoes.xhrFields) {
        opcoes.xhrFields = {withCredentials:true};
      }
      // Passa os argumentos novamente para o método sync.
      return ponteSync(metodo, modelo, opcoes);
    };
    
    /* Sobrescreve todas as requisições ajax do jQuery com alcançe global. Neste método é possivel customizarmos
     * as opções do ajax ou modificar as opções já existentes antes de cada requisição enviada e antes que sejam 
     * processadas pelo $.ajax().
     *
     * @Parametro {Objeto} [opcoes] As opções da requisição.
     * @Parametro {Objeto} [opcoesOriginais] São as opções não modificadas que são passadas para o $.ajax().
     * @Parametro {Objeto} [jqXHR] Objeto desta requisição.
     */
    $.ajaxPrefilter(function(opcoes, opcoesOriginais, jqXHR) {
      // Caso queira adicionar um dominio base para o sitio:
      // opcoes.url = 'http://localhost:81' + opcoes.url;
      
      // Caso queira utilizar credenciais:
      opcoes.xhrFields = {
        withCredentials: true
      };
    });
    
    // Iniciamos o nosso roteador aqui.
    Roteador.inicializar();
  };

  return { 
    inicializar: inicializar
  };
});