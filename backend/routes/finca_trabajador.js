'use strict'

var express = require('express');
var fincaTrabajadorController = require('../controllers/finca_trabajador');

var router = express.Router();

router.get('/Test', fincaTrabajadorController.test);
router.post('/Create', fincaTrabajadorController.create);
router.get('/List', fincaTrabajadorController.list);

module.exports = router;