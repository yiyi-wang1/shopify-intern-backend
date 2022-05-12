const axios = require('axios');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/inventory')
    .then(function (response) {
        console.log(response.data)
        res.render('index', {inventory: response.data})
    })
    .catch(err =>{
        res.send(err)
    })
}

exports.addInventoryRoutes = (req, res) => {
    res.render('add_inventory');
}

exports.updateInventoryRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/inventory', {params: {id: req.query.id}})
    .then(function (response) {
        console.log(response.data);
        res.render('update_inventory', {inventory: response.data})
    })
    .catch(err =>{
        res.send(err);
    })
}