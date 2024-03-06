'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('posts', 'tag_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'tags', key: 'id' },
    });
    await queryInterface.addColumn('posts', 'usuario_post_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'usuarios', key: 'id' },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('posts', 'tag_id');
    await queryInterface.removeColumn('posts', 'usuario_post_id');
  }
};
