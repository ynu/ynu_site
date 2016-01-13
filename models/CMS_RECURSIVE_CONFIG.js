/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_RECURSIVE_CONFIG', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    srcChannelID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    channelID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dirType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    indexTemplateID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    itemTemplateID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    indexfile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indexext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    itemext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pageCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isTop: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    pageType: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    orderBy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isSuggest: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    maxIndex: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '30'
    }
  }, {
    tableName: 'CMS_RECURSIVE_CONFIG',
    freezeTableName: true
  });
};
