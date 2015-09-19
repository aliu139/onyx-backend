/*eslint-env node */
var express = require('express');
var router = express.Router();
var request = require('request');

var apiKey = "AIzaSyBKeZCRS8E9tvFg2bgQ4-f21KWcrxHVSy4";

/* GET users listing. */
router.get('/hospital/:loc', function(req, res, next) {
    var currentLoc=req.params.loc;

    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+currentLoc+"&radius=500&types=hospital&key="+apiKey;
    var output = [];

    request(url, function(error, response, body) {
        var data = JSON.parse(body).results;
        //console.log(data.hotels);

        for(var hos in data){
            var long = data[hos].geometry.location.lng;
            var lat = data[hos].geometry.location.lat;
            var name = data[hos].name;

            output.push({'Name': name, 'Lat': lat, 'Lon': long});
        }

        res.send(output);
        //console.log(body);
    });
});

router.get('/search/:query', function(req,res, next){
    var query = req.params.query;
    var output = [];

    var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+query+"&key="+apiKey;

    request(url, function(error, response, body){
        var data = JSON.parse(body).results;

        for(var results in data){
            var long = data[results].geometry.location.lng;
            var lat = data[results].geometry.location.lat;
            var name = data[results].name;

            output.push({'Name': name, 'Lat': lat, 'Lon': long});
        }

        res.send(output);
    })
});

router.get('/directions/:start/:end', function(req,res,next){
    var start = req.params.start;
    var end =req.params.end;

    var output = [];

    var url = "https://maps.googleapis.com/maps/api/directions/json?origin="+start+"&destination="+end+"&avoid=highways&mode=walking&key="+apiKey;

    console.log(url);

    request(url, function(error, response, body){
        var data = JSON.parse(body).routes[0].legs[0].steps;

        var i = 1;

        for(var step in data){
            var long = data[step].end_location.lng;
            var lat = data[step].end_location.lat;
            var name= "WAYPOINT" + i.toString();
            i = i+1;

            output.push({'Name': name, 'Lat': lat, 'Lon': long});
        }

        res.send(output);
    })
});

module.exports = router;
