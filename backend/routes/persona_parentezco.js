'use strict'

var express = require('express');
var personaParentezcoController = require('../controllers/persona_parentezco');

var router = express.Router();

router.get('/Test', personaParentezcoController.test);
router.post('/Create', personaParentezcoController.create);
router.get('/List', personaParentezcoController.list);

module.exports = router;