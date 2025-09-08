'use strict';

const { hash } = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios',
      {
        nomo_usuario: 'Danilo Paz Cardoso Lopes',
        email: 'emailTeste@email.com',
        hash_senha: 'senhaPadrao',
        criado_em: new Date(),
        atualizado_em: new Date(),
      }, {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
  }
};
