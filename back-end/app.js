var express = require('express');
var app = express();
var db = require('./config/db');

/* App config */
var errorHandler = require('errorhandler');
app.use(errorHandler());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* Config API */
var api = {};
api.serviceOrder = require('./modules/service-orders/routes');

app.use('/api/serviceorders', api.serviceOrder);

/* Hello API */
app.get("/", function(req, resp) {
	resp.send("Hello service orders API!");
});

module.exports = app;