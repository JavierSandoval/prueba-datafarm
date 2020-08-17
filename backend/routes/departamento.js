'use strict'

var express = require('express');
var departamentoController = require('../controllers/departamento');

var router = express.Router();

router.get('/Test', departamentoController.test);
router.post('/Create', departamentoController.create);
router.get('/List',departamentoController.list);

module.exports = router;