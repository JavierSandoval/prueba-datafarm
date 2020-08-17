'use strict'

var express = require('express');
var parentezcoController = require('../controllers/parentezco');

var router = express.Router();

router.get('/Test', parentezcoController.test);
router.post('/Create', parentezcoController.create);
router.get('/List',parentezcoController.list);

module.exports = router;