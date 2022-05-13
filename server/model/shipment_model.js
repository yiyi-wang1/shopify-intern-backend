const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var shipment = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    inventory_id:{
        type: Schema.Types.ObjectId, ref: "inventory",
        required: true
    },
    inventory_name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
})

const InventoryDB = mongoose.model('ShipmentDB', shipment);

module.exports = InventoryDB;