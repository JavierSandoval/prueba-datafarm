'use strict'

const vereda = require('../models/vereda');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action Vereda'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return vereda
            .create ({
                nombre_vereda: params.nombre_vereda
            })
            .then(vereda => res.status(200).send(vereda))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return vereda.findAll({})
           .then(vereda => res.status(200).send(vereda))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;