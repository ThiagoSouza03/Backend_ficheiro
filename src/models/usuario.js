'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nome_usuario: DataTypes.STRING,
    email: DataTypes.STRING,
    hash_senha: DataTypes.STRING,
    criado_em: DataTypes.DATE,
    atualizado_em: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false,
    schema: 'usuarios'
  });
  return Usuario;
};