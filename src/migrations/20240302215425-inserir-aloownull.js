'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.changeColumn('usuarios','usuario', { 
      allowNull: false,
      type: Sequelize.STRING
    });
    await queryInterface.changeColumn('usuarios','senha', { 
      allowNull: false,
      type: Sequelize.STRING
    });
    await queryInterface.changeColumn('usuarios','status', { 
      allowNull: false,
      type: Sequelize.STRING
    });
    await queryInterface.changeColumn('usuarios','email', { 
      allowNull: false,
      type: Sequelize.STRING
    });


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuarios','usuario', { 
      allowNull: true,
      type: Sequelize.STRING
    });
    await queryInterface.changeColumn('usuarios','senha', { 
      allowNull: true,
      type: Sequelize.STRING
    });
    await queryInterface.changeColumn('usuarios','status', { 
      allowNull: true,
      type: Sequelize.STRING
    });
    await queryInterface.changeColumn('usuarios','email', { 
      allowNull: true,
      type: Sequelize.STRING
    });

  }

};
