'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    artistId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    tagId: DataTypes.INTEGER,
    lyrics: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    youtubeUrl: DataTypes.STRING
  }, {});
  Song.associate = function (models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: 'userId' })
    Song.belongsTo(models.Artist, { foreignKey: 'artistId' })
    Song.belongsTo(models.Tag, { foreignKey: 'tagId' })
    Song.hasMany(models.Comment, { foreignKey: 'songId' })
    Song.hasMany(models.Annotation, { foreignKey: 'songId' })
    Song.hasMany(models.SubAnnotation, { foreignKey: 'songId' })
  };
  return Song;
};
