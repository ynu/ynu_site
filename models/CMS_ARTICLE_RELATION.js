/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_ARTICLE_RELATION', {
    articleID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CMS_ARTICLE',
        key: 'ID'
      }
    },
    relationID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CMS_ARTICLE',
        key: 'ID'
      }
    }
  }, {
    tableName: 'CMS_ARTICLE_RELATION',
    freezeTableName: true
  });
};
