/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_MARK', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    articleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CMS_ARTICLE',
        key: 'ID'
      }
    },
    siteID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    point: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '0'
    },
    sum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    times: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'CMS_MARK',
    freezeTableName: true
  });
};
