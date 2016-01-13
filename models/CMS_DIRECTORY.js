/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_DIRECTORY', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    parentID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sortID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
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
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'CMS_DIRECTORY',
    freezeTableName: true
  });
};
