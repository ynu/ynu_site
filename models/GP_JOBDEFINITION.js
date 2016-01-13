/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GP_JOBDEFINITION', {
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
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parameters: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'GP_JOBDEFINITION',
    freezeTableName: true
  });
};
