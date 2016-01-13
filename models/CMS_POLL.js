/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_POLL', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CMS_SITE',
        key: 'ID'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pollCount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    options: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numbers: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expireDay: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ipcount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'CMS_POLL',
    freezeTableName: true
  });
};
