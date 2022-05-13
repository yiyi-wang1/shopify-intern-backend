var ShipmentDB = require('../model/shipment_model');
var InventoryDB = require('../model/inventory_model');
var mongoose = require('mongoose');

// Create a new shipment
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty!"});
        return;
    }

    console.log(req.body);

    //new shipment
    const inventory = req.body.inventory;
    // console.log(inventory);
    var inventoryInfo = inventory.split(',');
    const inventory_id = mongoose.Types.ObjectId(inventoryInfo[0].trim());
    const inventory_name = inventoryInfo[1];
    // console.log(inventory_id);
    // console.log(inventory_name);
    
    const shipment = new ShipmentDB({
        name: req.body.name,
        inventory_id: inventory_id,
        inventory_name: inventory_name,
        quantity: req.body.quantity
    })

    //save shipment in db
    shipment
        .save(shipment)
        .then(data => {
            // res.send(data)
            res.redirect('/add-shipment');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message});
        })

    
    // //update inventory in db
    const decreasedQuantity = - req.body.quantity;
    InventoryDB.findByIdAndUpdate(inventory_id, {$inc: {quantity: decreasedQuantity}})
        .then(data => {       
            // res.redirect('/add-shipment');
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message});
            })
}


// show shipment
exports.find = (req,res) => {

    ShipmentDB.find()
    .then(shipment => {
        res.send(shipment)
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message});
    })

}