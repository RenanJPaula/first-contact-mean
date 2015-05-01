var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceOrderSchema = new Schema({
    client: { type: String, default: '' },
    address: { type: String, default: '' },
    date: { type: Date, default: Date.now },
    value: { type: Number, min: 0, default: 0 },
    description: { type: String, default: '' }
});

module.exports = mongoose.model('ServiceOrder', ServiceOrderSchema);