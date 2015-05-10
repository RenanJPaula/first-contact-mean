var express = require('express');
var app = express();
var db = require('./config/db');

app.disable('x-powered-by');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Config API */
var api = {};
api.serviceOrder = require('./modules/service-orders/routes');
app.use('/api/serviceorders', api.serviceOrder);

/* Hello API */
app.get("/api", function(req, resp) {
	resp.send("Hello service orders API!");
});

module.exports = app;