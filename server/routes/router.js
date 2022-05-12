const express = require('express');
const route = express.Router();

const sevices = require('../services/render');
const inventory_controller = require('../controller/inventory_controller');
const shipment_controller = require('../controller/shipment_controller');

/**
 * @description Root Route 
 * @METHOD GET/
 */
route.get('/', sevices.homeRoutes);

/**
 * @description Add Inventory Page Route
 * @METHOD GET/
 */
route.get('/add-inventory', sevices.addInventoryRoutes);

/**
 * @description Update Inventory Page Route
 * @METHOD GET/
 */
route.get('/update-inventory', sevices.updateInventoryRoutes);

/**
 * @description Add Shipment Page Route
 * @METHOD GET/
 */
 route.get('/add-shipment', sevices.addShipmentRoutes);


//API
route.post('/api/inventory', inventory_controller.create);
route.get('/api/inventory', inventory_controller.find);
route.put('/api/inventory/:id', inventory_controller.update);
route.delete('/api/inventory/:id', inventory_controller.delete);


//API
route.post('/api/shipment', shipment_controller.create);
// route.get('/api/inventory', controller.find);
// route.put('/api/inventory/:id', controller.update);
// route.delete('/api/inventory/:id', controller.delete);

module.exports = route;