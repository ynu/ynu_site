/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_PUBLISH_QUENE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cmd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    channelID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    contentIDs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    increments: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    finishdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    log: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CMS_PUBLISH_QUENE',
    freezeTableName: true
  });
};
