/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_DISCUSS', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    articleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CMS_ARTICLE',
        key: 'ID'
      }
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'CMS_DISCUSS',
    freezeTableName: true
  });
};
