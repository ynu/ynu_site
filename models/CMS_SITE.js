/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMS_SITE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    sortID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rootChannel: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pubUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imagepath: {
      type: DataTypes.STRING,
      allowNull: true
    },
    docpath: {
      type: DataTypes.STRING,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    indexfile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    indexext: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemext: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dirType: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    scheduleID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    templateCategoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    ftp_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    ftp_host: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ftp_filesep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ftp_remotedir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ftp_user: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ftp_passwd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    creationdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ftp_port: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '21'
    },
    lockedFlag: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    lockedBy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    encoding: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'GBK'
    }
  }, {
    tableName: 'CMS_SITE',
    freezeTableName: true
  });
};
