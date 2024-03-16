'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Tag, {
        foreignKey: 'tag_id',
      });
      Post.belongsTo(models.Usuario, {
        foreignKey: 'usuario_post_id',
      });
    }
  }
  Post.init(
    {
      titulo_post: DataTypes.STRING,
      descricao_post: DataTypes.STRING,
      anexo_post: DataTypes.STRING,
      img_post: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts',
    },
  );
  return Post;
};
