/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_LOG', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    operator: {
      type: DataTypes.STRING,
      allowNull: true
    },
    operType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    operObject: {
      type: DataTypes.STRING,
      allowNull: true
    },
    objectType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endFlag: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CMS_LOG',
    freezeTableName: true
  });
};
