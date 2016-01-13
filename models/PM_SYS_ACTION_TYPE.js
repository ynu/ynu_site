/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PM_SYS_ACTION_TYPE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    JAVA_CLASS: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'PM_SYS_ACTION_TYPE',
    freezeTableName: true
  });
};
