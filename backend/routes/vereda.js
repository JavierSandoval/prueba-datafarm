'use strict'

var express = require('express');
var veredaController = require('../controllers/vereda');

var router = express.Router();

router.get('/Test', veredaController.test);
router.post('/Create', veredaController.create);
router.get('/List',veredaController.list);

module.exports = router;