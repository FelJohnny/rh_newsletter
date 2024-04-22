'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Post, {
        foreignKey: 'usuario_post_id',
      });
      Usuario.belongsTo(models.Rule, {
        foreignKey: 'rule_id',
      });
    }
  }
  Usuario.init(
    {
      usuario: DataTypes.STRING,
      senha: DataTypes.STRING,
      nome_completo: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuarios',
      defaultScope: {
        attributes: {
          exclude: ['senha']
        }
      }
    },
  );
  return Usuario;
};
