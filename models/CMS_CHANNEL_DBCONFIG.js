/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CHANNEL_DBCONFIG', {
    channelID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    config: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'CMS_CHANNEL_DBCONFIG',
    freezeTableName: true
  });
};
