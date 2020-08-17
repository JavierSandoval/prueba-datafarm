'use strict'

var express = require('express');
var fincaController = require('../controllers/finca');

var router = express.Router();

router.get('/Test', fincaController.test);
router.post('/Create', fincaController.create);
router.get('/List',fincaController.list);

module.exports = router;