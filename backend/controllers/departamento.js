'use strict'

const departamento = require('../models/departamento');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action departamento'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return departamento
            .create ({
                nombre_departamento: params.nombre_departamento
            })
            .then(departamento => res.status(200).send(departamento))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return departamento.findAll({})
           .then(departamento => res.status(200).send(departamento))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;