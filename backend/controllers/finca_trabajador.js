'use strict'
/*const Sequelize = require('sequelize');
const Op = Sequelize.Op;*/
const finca_trabajador = require('../models/finca_trabajador');
const finca = require('../models/finca');
const persona = require('../models/persona');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action finca_trabajador'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return finca_trabajador
            .create ({
                id_finca: params.id_finca,
                id_trabajador: params.id_trabajador
            })
            .then(finca_trabajador => res.status(200).send(finca_trabajador))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return finca_trabajador.findAll({})
           .then(finca_trabajador => res.status(200).send(finca_trabajador))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;