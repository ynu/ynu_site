/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CONTENTTYPE', {
    type: {
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
    inputFields: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    editUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viewUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    listUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CMS_CONTENTTYPE',
    freezeTableName: true
  });
};
