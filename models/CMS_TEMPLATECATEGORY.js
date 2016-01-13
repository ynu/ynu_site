/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_TEMPLATECATEGORY', {
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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creationdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CMS_TEMPLATECATEGORY',
    freezeTableName: true
  });
};
