/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_REUSE_PUBLISH', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    channelID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    articleID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    publishFlag: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    publishUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CMS_REUSE_PUBLISH',
    freezeTableName: true
  });
};
