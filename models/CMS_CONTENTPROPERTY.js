/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CONTENTPROPERTY', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    articleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    schemaID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    doubleValue: {
      type: 'DOUBLE',
      allowNull: true
    },
    stringValue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longValue: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    intValue: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dateValue: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'CMS_CONTENTPROPERTY',
    freezeTableName: true
  });
};
