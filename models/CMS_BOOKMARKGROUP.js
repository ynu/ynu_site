/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_BOOKMARKGROUP', {
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
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CMS_BOOKMARKGROUP',
    freezeTableName: true
  });
};
