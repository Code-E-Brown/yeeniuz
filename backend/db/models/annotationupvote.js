'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnnotationUpvote = sequelize.define('AnnotationUpvote', {
    userId: DataTypes.INTEGER,
    annotationId: DataTypes.INTEGER
  }, {});
  AnnotationUpvote.associate = function (models) {
    // associations can be defined here
    // AnnotationUpvote.belongsTo(models.Annotation, { foreignKey: 'annotationId' })
  };
  return AnnotationUpvote;
};
