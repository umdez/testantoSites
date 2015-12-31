'use strict'

/* Versão 0.0.1-Beta
 */

define([
  'jquery', 
  'underscore',
  'backbone'
], function($, _, BackBone){
  
  /* A cada requisição iremos retornar na resposta um campo 'code' que é responsável por
   * informar qual estado da sessão. Isso faz com que o lado cliente possa facilmente
   * manipular os diversos estados de uma requisição. Abaixo a lista dos códigos: 
   ------------------------------------------------------------------------------ */
  var CodigosDeResposta = function() {
    this.CODIGOS = {
      
      'INFO': [],  // Aqui são os códigos relacionados às informações.
     
      'SUCESSO': [],  // Aqui os códigos de sucesso.

      'ERRO': []  // Informar o cliente que houve algum erro.
    };
  };
  
  /* Realiza a adição de um novo código. Cada código será utilizado para a comunicação das respostas do serviço REST com os nossos modelos.
   * A gente usará isso para ficar mais simples de manipular as diversas respostas do serviço REST.
   *
   * @Parametro {tipo} O tipo do código. Podendo ser: 'INFO', 'SUCESSO' ou 'ERRO'.
   * @Parametro {nome} O nome do código. Por exemplo: 'SENHA_INVALIDA'.
   * @Parametro {valor} O valor do código. Por exemplo: '001'
   * @Parametro {mensagem} Uma mensagem que será associada a um código. Por exemplo: 'Senha invalida ou não informada.'.
   */
  CodigosDeResposta.prototype.adicionarUmCodigo = function(tipo, nome, valor, mensagem) {
   
    if ('INFO' === tipo) {
      this.CODIGOS['INFO'].push({
        nome: nome
      , cod: valor.toString()
      , msg: mensagem
      });
      
    } else if ('SUCESSO' === tipo) {
      this.CODIGOS['SUCESSO'].push({
        nome: nome
      , cod: valor.toString()
      , msg: mensagem
      }); 
      
    } else if ('ERRO' === tipo) {
      this.CODIGOS['ERRO'].push({
        nome: nome
      , cod: valor.toString()
      , msg: mensagem
      }) 
    } else {
      console.log('Você informou um tipo que não existe.')
      return false;
    }
    
    // O cód. foi adicionado com sucesso.
    return true;
  };
  
  /* Realizamos aqui uma busca por determinado código pelo valor informado. Se caso o código for encontrado,
   * nós retornamos a mensagem e o tipo do código. Os tipos de códigos que temos são 'INFO', 'SUCESSO' e 'ERRO'.
   *
   * Uma das utilidades de retornarmos o tipo é que podemos separar as informações, por exemplo, a mensagem do tipo 
   * 'SUCESSO' pode ser apresentada da cor verde, a mensagem 'INFO' poderia ser de cor azul, já a mensagem de erro
   * pode ser apresentada com a cor vermelha. Assim, as cores podem representar a gravidade do código retornado.
   *
   * @Parametro {valor} O valor do nosso código. Geralmente um campo texto com valor único.
   * @Retorno Uma mensagem e o tipo se encontrarmos o código, ou valor null, se não for encontrado o código.
   */
  CodigosDeResposta.prototype.procurarUmCodigoPeloValor = function(valor) {
    var CODS = this.CODIGOS;
    var codigo = null;
    var seEncontrou = false;
    
    // Percorreremos todos os tipos de códigos e retornamos se encontrar.
    for (var tipo in CODS) {
      if (CODS.hasOwnProperty(tipo)) {
        // Percorremos aqui os conteudos dos tipos de codigos.
        for (var ca = 0; ca < CODS[tipo].length; ca++) {
          // Se encontrarmos então salvamos as informações e retornamos.
          if (CODS[tipo][ca] && CODS[tipo][ca].cod === valor.toString()) {
            // Aqui a gente retorna o nome, codigo e a mensagem relativa ao código.
            codigo = { nome: CODS[tipo][ca].nome, tipo: tipo, cod: CODS[tipo][ca].cod, msg: CODS[tipo][ca].msg };
            seEncontrou = true;
            break;
          }
        }
      }
      if (seEncontrou) break;
    }
    return codigo;
  };
  
  return { 
    // Aqui retornamos este objeto.
    codigosDeResposta: new CodigosDeResposta()
  };
});