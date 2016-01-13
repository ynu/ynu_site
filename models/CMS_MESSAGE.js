/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_MESSAGE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stat: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    creationdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    receivenames: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    receiveusers: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'CMS_MESSAGE',
    freezeTableName: true
  });
};
