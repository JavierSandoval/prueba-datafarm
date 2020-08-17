'use strict'
/*const Sequelize = require('sequelize');
const Op = Sequelize.Op;*/
const finca_persona = require('../models/finca_persona');
const finca = require('../models/finca');
const persona = require('../models/persona');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action finca_persona'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return finca_persona
            .create ({
                id_finca: params.id_finca,
                id_persona: params.id_persona
            })
            .then(finca_persona => res.status(200).send(finca_persona))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return finca_persona.findAll({})
           .then(finca_persona => res.status(200).send(finca_persona))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;