/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_USER_SITE', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    }
  }, {
    tableName: 'CMS_USER_SITE',
    freezeTableName: true
  });
};
