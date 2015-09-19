/*eslint-env node */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/:loc', function(req, res, next) {
    var currentLoc=req.params.loc;
    var year = new Date().getFullYear();
    var day = new Date().getDay();
    var nextDay = (day+1)%30;
    var month = new Date().getMonth();

    var dateString;
    var nextDateString;

    dateString = year.toString()+"0"+month.toString() + day.toString();
    nextDateString = year.toString()+"0"+month.toString() + nextDay.toString();

    var url = "http://www.priceline.com/api/hotelretail/listing/v3/"+currentLoc+"/"+dateString+"/"+nextDateString+"/1/50?offset=0";
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
