/* global process */

var env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        port: 18080,
        mysql: {
            host: process.env.YNU_MYSQL_HOST || '202.203.209.55',
            port: process.env.YNU_MYSQL_PORT || 3306,
            username: process.env.YNU_MYSQL_USERNAME || 'root',
            password: process.env.YNU_MYSQL_PASSWORD || 'ynuroot',
            database: process.env.YNU_MYSQL_DATABASE || 'cms61'
        }
    },

    production: {
        port: 18080,
        mysql: {
            host: process.env.YNU_MYSQL_HOST || '',
            port: process.env.YNU_MYSQL_PORT || 3306,
            username: process.env.YNU_MYSQL_USERNAME || '',
            password: process.env.YNU_MYSQL_PASSWORD || '',
            database: process.env.YNU_MYSQL_DATABASE || ''
        }
    }
};

module.exports = config[env];
