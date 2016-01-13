/**
 * Created by liudonghua on 2016-01-12.
 */
var config = require('../configuration/config');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
    // http://docs.sequelizejs.com/en/latest/docs/models-definition/#definition
    define: {
        timestamps: false // true by default
    },
    host: config.mysql.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// import necessary not all models
sequelize.import('../models/CMS_SITE');
sequelize.import('../models/CMS_ARTICLE');
sequelize.import('../models/CMS_CHANNEL');

// sync the imported models
sequelize.sync({ force: false}).then(function() {
    console.info('sequelize.sync successfully');
}).catch(function(error) {
    console.info('sequelize.sync failed ' + error);
});

module.exports = sequelize;