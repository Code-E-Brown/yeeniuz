'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubAnnotationUpvote = sequelize.define('SubAnnotationUpvote', {
    userId: DataTypes.INTEGER,
    subAnnotationId: DataTypes.INTEGER
  }, {});
  SubAnnotationUpvote.associate = function (models) {
    // associations can be defined here
  };
  return SubAnnotationUpvote;
};
