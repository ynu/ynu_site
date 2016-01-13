/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CHANNEL_TEMPLATE', {
    channelID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    templateID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CMS_TEMPLATE',
        key: 'id'
      }
    }
  }, {
    tableName: 'CMS_CHANNEL_TEMPLATE',
    freezeTableName: true
  });
};
