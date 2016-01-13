/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PD_INS_ACTION', {
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
    }
  }, {
    tableName: 'PD_INS_ACTION',
    freezeTableName: true
  });
};
