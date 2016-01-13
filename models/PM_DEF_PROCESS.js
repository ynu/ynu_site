/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PM_DEF_PROCESS', {
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
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CREATION_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MODIFY_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AUTHOR: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DEFINITION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DISTANCE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    VERSION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LASTACCESSED: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'PM_DEF_PROCESS',
    freezeTableName: true
  });
};
