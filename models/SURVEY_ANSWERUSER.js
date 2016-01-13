/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SURVEY_ANSWERUSER', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    surveyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'SURVEY_SURVEY',
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
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'SURVEY_ANSWERUSER',
    freezeTableName: true
  });
};
