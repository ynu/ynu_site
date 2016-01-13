/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_LEAVEMESSAGE_TYPE', {
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
    CREATIONDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SITEID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'CMS_LEAVEMESSAGE_TYPE',
    freezeTableName: true
  });
};
