'use strict'
/*const Sequelize = require('sequelize');
const Op = Sequelize.Op;*/
const persona_parentezco = require('../models/persona_parentezco');
const persona = require('../models/persona');
const parentezco = require('../models/parentezco');



var controller = {

    test: (req, res) => {
        return res.status(200).send({
            status: 'Success',
            message: 'Test action persona_parentezco'
        });
    },
    create: (req, res) =>{
        var params = req.body;

        return persona_parentezco
            .create ({
                id_persona1: params.id_persona1,
                id_persona2: params.id_persona2,
                id_parentezco: params.id_parentezco
            })
            .then(persona_parentezco => res.status(200).send(persona_parentezco))
            .catch(error => res.status(400).send(error))
    },
    list: (_, res) => {
        return persona_parentezco.findAll({})
           .then(persona_parentezco => res.status(200).send(persona_parentezco))
           .catch(error => res.status(400).send(error))
    }

};

module.exports = controller;