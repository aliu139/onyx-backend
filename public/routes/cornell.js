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
    list.push({'Name': "Schoellkopf Field", 'Lat': 42.443926, 'Lon': -76.478546});
    list.push({'Name': "Risley Hall", 'Lat': 42.452994, 'Lon': -76.481644});
    list.push({'Name': "Duffield Hall", 'Lat': 42.445003, 'Lon': -76.482484});
    list.push({'Name': "Cornell Law School", 'Lat': 42.443851, 'Lon': -76.485520});
    list.push({'Name': "Insomnia Cookies", 'Lat': 42.441197, 'Lon': -76.485016});
    list.push({'Name': "Old Tea House", 'Lat': 42.441922, 'Lon': -76.487280});
    res.send(list);
});

module.exports = router;
