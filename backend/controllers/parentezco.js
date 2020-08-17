'use strict'

const parentezco = require('../models/parentezco');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action parentezco'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return parentezco
            .create ({
                tipo_parentezco: params.tipo_parentezco
            })
            .then(parentezco => res.status(200).send(parentezco))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return parentezco.findAll({})
           .then(parentezco => res.status(200).send(parentezco))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;