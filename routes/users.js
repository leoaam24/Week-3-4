const express = require('express');
const router = express.Router();

const usersController = require('../controller/users');
const userValidation = require('../utilities/userValidator');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', userValidation.userValidationRules(), userValidation.validate, usersController.createUser);

router.put('/:id',userValidation.userValidationRules(), userValidation.validate, usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
