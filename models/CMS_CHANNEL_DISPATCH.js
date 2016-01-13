/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CHANNEL_DISPATCH', {
    channelID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    dispatchID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CMS_CHANNEL',
        key: 'ID'
      }
    }
  }, {
    tableName: 'CMS_CHANNEL_DISPATCH',
    freezeTableName: true
  });
};
