/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var request = require('request');

var priceline = require('./public/routes/priceline.js');
var googleMaps = require('./public/routes/maps.js');
var cornell = require('./public/routes/cornell.js');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

app.use('/priceline', priceline);
app.use('/gmaps', googleMaps);
app.use('/cornell', cornell);

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, function() {

  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
