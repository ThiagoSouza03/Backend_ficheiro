'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personagens.init({
    nome: DataTypes.STRING,
    jogador: DataTypes.STRING,
    profissao: DataTypes.STRING,
    nivel: DataTypes.NUMBER,
    pontos_experiencia: DataTypes.NUMBER,
    criado_em: DataTypes.DATE,
    atualizado_em: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Personagens',
    tableName: 'personagens',
    timestamps: false,
    schema: 'call_of_cthulhu'
  });
  return Personagens;
};