'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
    Comment.belongsTo(models.Song, { foreignKey: 'songId' })
    const columnMapping = {
      through: 'CommentUpvote',
      foreignKey: 'commentId',
      otherKey: 'userId'
    }
    Comment.belongsToMany(models.User, columnMapping)
  };
  return Comment;
};
