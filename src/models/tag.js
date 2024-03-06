'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      Tag.hasMany(models.Post, { //esta em varios
        foreignKey: 'tag_id',
      });
    }
  }
  Tag.init(
    {
      nome: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Tag',
      tableName: 'tags',
    },
  );
  return Tag;
};
