/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SURVEY_SURVEY', {
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
      allowNull: true,
      references: {
        model: 'CMS_SITE',
        key: 'ID'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    answerCount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ipcount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SURVEY_SURVEY',
    freezeTableName: true
  });
};
