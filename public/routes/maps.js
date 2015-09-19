/*eslint-env node */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/hospital/:loc', function(req, res, next) {
    var currentLoc=req.params.loc;
    var apiKey = "AIzaSyBKeZCRS8E9tvFg2bgQ4-f21KWcrxHVSy4";

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

module.exports = router;
