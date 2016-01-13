/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_CONTENTVERSION', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    entityID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    entityType: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    version: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    memo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    creationdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CMS_CONTENTVERSION',
    freezeTableName: true
  });
};
