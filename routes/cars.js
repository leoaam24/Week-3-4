const router = require('express').Router();
const carController = require('../controller/cars');
const validation = require('../utilities/validator');

router.get('/', carController.getAll);

router.get('/:id', carController.findOne);

router.post('/', validation.userValidationRules(), validation.validate, carController.registerCar);

router.put('/:id',validation.userValidationRules(), validation.validate, carController.updateCar);

router.delete('/:id', carController.deleteCar);
 

module.exports = router;
