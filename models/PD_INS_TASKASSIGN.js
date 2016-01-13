/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PD_INS_TASKASSIGN', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    INS_PROCESS_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'PD_INS_PROCESS',
        key: 'ID'
      }
    },
    DEF_NODE_NAME: {
      type: DataTypes.STRING,
      allowNull: true
    },
    executeUsers: {
      type: DataTypes.STRING,
      allowNull: true
    },
    summaryUsers: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'PD_INS_TASKASSIGN',
    freezeTableName: true
  });
};
