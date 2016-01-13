/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CONTROL_IP', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    timeID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    beginIp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endIp: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CMS_CONTROL_IP',
    freezeTableName: true
  });
};
