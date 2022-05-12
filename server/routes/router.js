const express = require('express');
const route = express.Router();

const sevices = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @METHOD GET/
 */
route.get('/', sevices.homeRoutes);

/**
 * @description Add Inventory Route
 * @METHOD GET/
 */
route.get('/add-inventory', sevices.addInventoryRoutes);

/**
 * @description Update Inventory Route
 * @METHOD GET/
 */
route.get('/update-inventory', sevices.updateInventoryRoutes);


//API
route.post('/api/inventory', controller.create);
route.get('/api/inventory', controller.find);
route.put('/api/inventory/:id', controller.update);
route.delete('/api/inventory/:id', controller.delete);

module.exports = route;