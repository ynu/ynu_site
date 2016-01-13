/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OS_PROPERTYENTRY', {
    entity_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    entity_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    entity_key: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    key_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    boolean_val: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    double_val: {
      type: 'DOUBLE',
      allowNull: true
    },
    string_val: {
      type: DataTypes.STRING,
      allowNull: true
    },
    long_val: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    int_val: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    date_val: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'OS_PROPERTYENTRY',
    freezeTableName: true
  });
};
