var InventoryDB = require('../model/inventory_model');

// Create a new Inventory
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty!"});
        return;
    }

    //new inventory
    const inventory = new InventoryDB({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
    })

    //save inventory in db
    inventory
        .save(inventory)
        .then(data => {
            // res.send(data)
            res.redirect('/add-inventory');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message});
        })
}


// show inventory
exports.find = (req,res) => {

    if(req.query.id){
        const id = req.query.id;

        InventoryDB.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: "Cannot find inventory"
                })
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message});
        })
    }else{
        InventoryDB.find()
        .then(inventory => {
            res.send(inventory)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message});
        })
    }
}


// Update inventory by id
exports.update = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message:"Content can not be empty!"});
        return;
    }
    
    const id = req.params.id;
    InventoryDB.findByIdAndUpdate(id, req.body)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message:`Cannot Update inventory with ${id}`})
            }else{
                res.send(data);
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message})
        })
}

// Delete inventory by id
exports.delete = (req,res) => {
    const id = req.params.id;

    InventoryDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message:`Connot delete inventory with ${id}`})
            }else{
                res.send({
                    message: "Inventory was deleted!"})
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message})
        })
}