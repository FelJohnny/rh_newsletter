'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.bulkInsert('usuarios',[
      {
        usuario: "usuario1",
        senha: "senha1",
        nome_completo: "Usuário Um",
        status: true,
        email: "usuario1@example.com",
        rule_id: 66, // Supondo que este usuário siga a regra com ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: "usuario2",
        senha: "senha2",
        nome_completo: "Usuário Dois",
        status: false,
        email: "usuario2@example.com",
        rule_id: 67, // Supondo que este usuário siga a regra com ID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: "usuario3",
        senha: "senha3",
        nome_completo: "Usuário Três",
        status: true,
        email: "usuario3@example.com",
        rule_id: 68, // Este usuário também segue a regra com ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: "usuario4",
        senha: "senha4",
        nome_completo: "Usuário Quatro",
        status: true,
        email: "usuario4@example.com",
        rule_id: 69, // Supondo que este usuário siga a regra com ID 3
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: "usuario5",
        senha: "senha5",
        nome_completo: "Usuário Cinco",
        status: false,
        email: "usuario5@example.com",
        rule_id: 69, // Este usuário também segue a regra com ID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
