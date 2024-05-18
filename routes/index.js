const express = require('express');
const router = express.Router();
const controllerIndex = require('../controller/index.js');

router.use('/', require('./swagger'));

router.use('/cars', require('./cars'));

router.use('/users', require('./users.js'));

router.get('/', controllerIndex.indexPage);


module.exports = router;