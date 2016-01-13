/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PD_INS_PROCESS', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    DEF_PROCESS_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'PM_DEF_PROCESS',
        key: 'ID'
      }
    },
    START_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    END_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    START_USER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'CMS_ARTICLE',
        key: 'ID'
      }
    },
    ENTITY_TYPE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    REMARK: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'PD_INS_PROCESS',
    freezeTableName: true
  });
};
