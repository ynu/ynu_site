/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_POLL_USER', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    pollID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CMS_POLL',
        key: 'ID'
      }
    },
    system: {
      type: DataTypes.STRING,
      allowNull: false
    },
    browser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numbers: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'CMS_POLL_USER',
    freezeTableName: true
  });
};
