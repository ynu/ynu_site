/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CONTENTSCHEMA', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    sortID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    caption: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fieldType: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'CMS_CONTENTSCHEMA',
    freezeTableName: true
  });
};
