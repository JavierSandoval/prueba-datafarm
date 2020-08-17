'use strict'

const trabajador = require('../models/trabajador');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action trabajador'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return trabajador
            .create ({
                id_trabajador: params.id_trabajador,
                nombre_trabajador: params.nombre_trabajador,
                apellido_trabajador: params.apellido_trabajador,
                telefono_trabajador: params.telefono_trabajador,
                cargo: params.cargo,
                salario: params.salario
            })
            .then(trabajador => res.status(200).send(trabajador))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return trabajador.findAll({})
           .then(trabajador => res.status(200).send(trabajador))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;