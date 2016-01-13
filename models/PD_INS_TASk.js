/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PD_INS_TASk', {
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
    TYPE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ACTIVATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FINISH_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ENTITY_STATUS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CHOOSED_USERS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EXECUTE_USER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    REMARK: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DECLARE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ASSIGNABLE_USERS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ASSIGNABLE_GROUPS: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'PD_INS_TASk',
    freezeTableName: true
  });
};
