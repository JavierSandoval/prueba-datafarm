'use strict'

var express = require('express');
var fincaPersonaController = require('../controllers/finca_persona');

var router = express.Router();

router.get('/Test', fincaPersonaController.test);
router.post('/Create', fincaPersonaController.create);
router.get('/List',fincaPersonaController.list);

module.exports = router;