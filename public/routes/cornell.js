/*eslint-env node */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var list = [];
    list.push({'Name': "Statler Hotel", 'Lat': 42.446298, 'Lon': -76.482019});
    list.push({'Name': "Cornell Store", 'Lat': 42.446711, 'Lon': -76.484674});
    list.push({'Name': "Olin Library", 'Lat': 42.447914, 'Lon': -76.484324});
    list.push({'Name': "Bailey Hall", 'Lat': 42.449033, 'Lon': -76.480128});

    res.send(list);
});

module.exports = router;
