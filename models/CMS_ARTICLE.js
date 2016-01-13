/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_ARTICLE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    parentID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sortID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viceTitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Keyword: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Source: {
      type: DataTypes.STRING,
      allowNull: true
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    publishUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viewCount: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    wordCount: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    grade: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    version: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    pubFlag: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    creationdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    publishdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '0'
    },
    query1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    query2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lockedFlag: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    lockedBy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    workflowStatus: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    srccontentid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    isTip: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'CMS_ARTICLE',
    freezeTableName: true
  });
};
