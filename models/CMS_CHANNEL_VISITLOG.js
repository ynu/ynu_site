/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CHANNEL_VISITLOG', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    channelID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CMS_CHANNEL',
        key: 'ID'
      }
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    system: {
      type: DataTypes.STRING,
      allowNull: false
    },
    browser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'CMS_CHANNEL_VISITLOG',
    freezeTableName: true
  });
};
