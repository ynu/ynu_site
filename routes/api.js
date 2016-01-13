var express = require('express');
var router = express.Router();

var sequelize = require('../database/ynu_site_mysql');

var CMS_SITE = sequelize.import('../models/CMS_SITE');
var CMS_ARTICLE = sequelize.import('../models/CMS_ARTICLE');
var CMS_CHANNEL = sequelize.import('../models/CMS_CHANNEL');

router.get('/sites', function(req, res, next) {
  CMS_SITE.findAll({ attributes: ['ID', 'name', 'url'] }).then(function(sites) {
    res.json({ result: 0, data: sites });
  });
});

router.get('/channels', function(req, res, next) {
  CMS_CHANNEL.findAll({ attributes: ['ID', 'parentID', 'siteID', 'name', 'title'] }).then(function(channels) {
    res.json({ result: 0, data: channels });
  });
});

module.exports = router;
