const mongoose = require('mongoose');

var inventory = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})


const InventoryDB = mongoose.model('InventoryDB', inventory);

module.exports = InventoryDB;