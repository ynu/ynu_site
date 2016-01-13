/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_BINARY', {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    linkAlt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    srcFile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fileExt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    filesize: {
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
    filename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CMS_BINARY',
    freezeTableName: true
  });
};
