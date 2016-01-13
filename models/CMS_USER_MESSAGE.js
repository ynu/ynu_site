/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_USER_MESSAGE', {
    userID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CMS_USER',
        key: 'ID'
      }
    },
    messageID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'CMS_USER_MESSAGE',
    freezeTableName: true
  });
};
