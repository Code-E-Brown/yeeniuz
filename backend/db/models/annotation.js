'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annotation = sequelize.define('Annotation', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    startPos: DataTypes.INTEGER,
    endPos: DataTypes.INTEGER
  }, {});
  Annotation.associate = function (models) {
    // associations can be defined here
    Annotation.belongsTo(models.Song, { foreignKey: 'songId' })
    Annotation.belongsTo(models.User, { as: "Author", foreignKey: 'userId' })
    const columnMapping = {
      through: 'AnnotationUpvote',
      as: "Upvotes",
      foreignKey: 'annotationId',
      otherKey: 'userId'
    }
    Annotation.belongsToMany(models.User, columnMapping)
    Annotation.hasMany(models.SubAnnotation, { foreignKey: 'annotationId' })
    // Annotation.hasMany(models.AnnotationUpvote, { foreignKey: "annotationId" })
  };
  return Annotation;
};
