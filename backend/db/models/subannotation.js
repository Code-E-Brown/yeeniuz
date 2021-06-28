'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubAnnotation = sequelize.define('SubAnnotation', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    annotationId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  SubAnnotation.associate = function (models) {
    // associations can be defined here
    SubAnnotation.belongsTo(models.Annotation, { foreignKey: 'annotationId' })
    SubAnnotation.belongsTo(models.Song, { foreignKey: 'songId' })
    SubAnnotation.belongsTo(models.User, { as: "Author", foreignKey: 'userId' })
    const columnMapping = {
      through: 'SubAnnotationUpvote',
      as: "Upvotes",
      foreignKey: 'subAnnotationId',
      otherKey: 'userId'
    }
    SubAnnotation.belongsToMany(models.User, columnMapping)
  };
  return SubAnnotation;
};
