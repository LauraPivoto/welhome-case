const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/property.controller');

router.get('/', propertyController.listProperties);
router.post('/', propertyController.addProperty);
router.put('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteProperty);

module.exports = router;
