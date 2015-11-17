'use strict';

module.exports = function (database, DataTypes) {

  var Slide = database.define('Slide', {
    titulo: {
      type: DataTypes.STRING,
      validate: {}
    },
    texto: {
      type: DataTypes.STRING,
      validate: {}
    },
    texto_botao: {
      type: DataTypes.STRING,
      validate: {}
    },
    imagem: {
      type: DataTypes.BLOB('long'),
      validate: {}
    },
  }, {
    associate: function (modelos) {

    },
    instanceMethods: {
    
    }
  });

  return Slide;
};