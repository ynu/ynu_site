/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_ATTACHMENT', {
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
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bigFilename: {
      type: DataTypes.STRING,
      allowNull: true
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
    contentType: {
      type: DataTypes.STRING,
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
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sortID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'CMS_ATTACHMENT',
    freezeTableName: true
  });
};
