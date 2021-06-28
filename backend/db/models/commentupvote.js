'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentUpvote = sequelize.define('CommentUpvote', {
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  CommentUpvote.associate = function (models) {
    // associations can be defined here
  };
  return CommentUpvote;
};
