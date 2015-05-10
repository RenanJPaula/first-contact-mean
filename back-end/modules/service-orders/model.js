var mongoose = require('mongoose');

var serviceOrderSchema = new mongoose.Schema({
	client: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	value: {
		type: Number,
		min: 0,
		required: true
	},
	paid: {
		type: Boolean,
		default: false
	},
	description: {
		type: String,
		default: ''
	}
});

module.exports = mongoose.model('ServiceOrder', serviceOrderSchema);