'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    title: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here
    Tag.hasMany(models.Song, { foreignKey: 'tagId' })
  };
  return Tag;
};
