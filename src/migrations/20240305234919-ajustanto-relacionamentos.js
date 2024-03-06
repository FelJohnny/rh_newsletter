'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'rule_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'rules', key: 'id' },
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'rule_id');
  },
};
