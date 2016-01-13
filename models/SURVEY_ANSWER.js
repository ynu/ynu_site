/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SURVEY_ANSWER', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    questionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'SURVEY_QUESTION',
        key: 'ID'
      }
    },
    userID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SURVEY_ANSWER',
    freezeTableName: true
  });
};
