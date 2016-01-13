/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_LEAVEMESSAGE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CONTACT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TITLE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CONTENT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CREATIONDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    REPLYCONTENT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    REPLYDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TYPE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    REPLYNAME: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISAUDIT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'CMS_LEAVEMESSAGE',
    freezeTableName: true
  });
};
