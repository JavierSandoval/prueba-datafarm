'use strict'

var express = require('express');
var personaController = require('../controllers/persona');

var router = express.Router();

router.get('/Test', personaController.test);
router.post('/Create', personaController.create);
router.get('/List',personaController.list);

module.exports = router;