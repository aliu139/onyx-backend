/*eslint-env node */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var url = "http://www.priceline.com/api/hotelretail/listing/v3/miami,fl/20151025/20151027/1/50?offset=0";
    var output = [];

    request(url, function(error, response, body) {
        var data = JSON.parse(body).hotels;
        //console.log(data.hotels);

        for(var hotel in data){
            var long = data[hotel].lon;
            var lat = data[hotel].lat;
            var name = data[hotel].hotelName;

            output.push({'Name': name, 'Lat': lat, 'Lon': long});
        }

        res.send(output);
        //console.log(body);
    });
});

module.exports = router;
