'use strict'

const municipio = require('../models/municipio');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action municipio'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return municipio
            .create ({
                nombre_municipio: params.nombre_municipio
            })
            .then(municipio => res.status(200).send(municipio))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return municipio.findAll({})
           .then(municipio => res.status(200).send(municipio))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;