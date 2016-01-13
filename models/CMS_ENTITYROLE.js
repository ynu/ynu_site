/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_ENTITYROLE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    entityID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    entityType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    roleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'CMS_ENTITYROLE',
    freezeTableName: true
  });
};
