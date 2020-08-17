'use strict'

var express = require('express');
var municipioController = require('../controllers/municipio');

var router = express.Router();

router.get('/Test', municipioController.test);
router.post('/Create', municipioController.create);
router.get('/List',municipioController.list);

module.exports = router;