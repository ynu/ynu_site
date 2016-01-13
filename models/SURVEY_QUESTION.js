/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SURVEY_QUESTION', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    sortID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    surveyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'SURVEY_SURVEY',
        key: 'ID'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    columns: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    required: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    hasOther: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    helpText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subTitles: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'SURVEY_QUESTION',
    freezeTableName: true
  });
};
