'use strict';
const {
  Model
} = require('sequelize');
const Usuario = require('./usuario');
const Personagens = require('./personagens')
module.exports = (sequelize, DataTypes) => {
  class FichaUsuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.FichaUsuario, {
        foreignKey: 'id'
      });
      Usuario.hasMany(models.Personagens, {
        foreignKey: 'id'
      })
    }
  }
  FichaUsuario.init({
    criado_em: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'FichaUsuario',
    tableName: 'ficha_usuarios',
    timestamps: false,
    schema: 'usuarios'
  });
  return FichaUsuario;
};