/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GP_SCHEDULE', {
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
    jobDefinitionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jobDatas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    startdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    enddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    repeatCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    repeatInterval: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cronExpression: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'GP_SCHEDULE',
    freezeTableName: true
  });
};
