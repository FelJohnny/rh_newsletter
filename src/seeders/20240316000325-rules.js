'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('rules', [

      { nome: "Acesso Total", status: true ,createdAt: new Date(),updatedAt: new Date()},
      { nome: "Editor", status: true ,createdAt: new Date(),updatedAt: new Date()},
      { nome: "Excluir", status: true ,createdAt: new Date(),updatedAt: new Date()},
      { nome: "Criar Post", status:true ,createdAt: new Date(),updatedAt: new Date()},

     ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rules', null, {});

  }
};
