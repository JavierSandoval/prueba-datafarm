'use strict'

var express = require('express');
var trabajadorController = require('../controllers/trabajador');

var router = express.Router();

router.get('/Test', trabajadorController.test);
router.post('/Create', trabajadorController.create);
router.get('/List',trabajadorController.list);

module.exports = router;