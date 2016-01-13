/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CHANNEL_ARTICLE', {
    channelID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    articleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'CMS_CHANNEL_ARTICLE',
    freezeTableName: true
  });
};
