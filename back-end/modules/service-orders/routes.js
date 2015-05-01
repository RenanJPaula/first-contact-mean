var express = require('express');
var router = express.Router();
var ServiceOrder = require('./model')

router.get('/', function(req, res) {
	ServiceOrder.find({}, function(err, data) {
		if(err) {
			console.log("Error in get: " + err);
		}

		res.json(data);
	});
});

module.exports = router;