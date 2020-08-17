'use strict'

const persona = require('../models/persona');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action persona'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return persona
            .create ({
                id_persona: params.id_persona,
                nombre_persona: params.nombre_persona,
                apellido_persona: params.apellido_persona,
                telefono_persona: params.telefono_persona
            })
            .then(persona => res.status(200).send(persona))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return persona.findAll({})
           .then(persona => res.status(200).send(persona))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;