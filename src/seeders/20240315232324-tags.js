'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('tags', [

          { nome: "Tecnologia", status: true,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Saúde", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Educação", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Esportes", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Política", status: false ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Viagem", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Culinária", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Arte", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Cinema", status: false ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Música", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Literatura", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Negócios", status: false ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Moda", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Ciência", status: true ,createdAt: new Date(),updatedAt: new Date()},
          { nome: "Filosofia", status: false ,createdAt: new Date(),updatedAt: new Date()}  
      ], {});
  },


  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('tags', null, {});

  }
};
