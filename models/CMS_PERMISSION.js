/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_PERMISSION', {
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
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chinesename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    privs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    entitylevel: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'CMS_PERMISSION',
    freezeTableName: true
  });
};
