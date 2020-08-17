'use strict'
/*const Sequelize = require('sequelize');
const Op = Sequelize.Op;*/
const finca = require('../models/finca');
const persona = require('../models/persona');
const vereda = require('../models/vereda');
const municipio = require('../models/municipio');
const departamento = require('../models/departamento');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action finca'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return finca
            .create ({
                nombre_finca: params.nombre_finca,
                id_propietario: params.id_propietario,
                id_vereda: params.id_vereda,
                id_municipio: params.id_municipio,
                id_departamento: params.id_departamento
            })
            .then(finca => res.status(200).send(finca))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return finca.findAll({})
           .then(finca => res.status(200).send(finca))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;