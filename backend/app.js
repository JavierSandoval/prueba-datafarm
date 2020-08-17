
var express = require('express');
var bodyParser = require('body-parser');
var vereda_routes = require('./routes/vereda');
var municipio_routes = require('./routes/municipio');
var departamento_routes = require('./routes/departamento');
var persona_routes = require('./routes/persona');
var trabajador_routes = require('./routes/trabajador');
var parentezco_routes = require('./routes/parentezco');
var finca_routes = require('./routes/finca');
var finca_persona_routes = require('./routes/finca_persona');
var finca_trabajador_routes = require('./routes/finca_trabajador');
var persona_parentezco_routes = require('./routes/persona_parentezco');

var app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Add prefix to routes
app.use('/api/vereda', vereda_routes);
app.use('/api/municipio', municipio_routes);
app.use('/api/departamento', departamento_routes);
app.use('/api/persona', persona_routes);
app.use('/api/trabajador', trabajador_routes);
app.use('/api/parentezco', parentezco_routes);
app.use('/api/finca', finca_routes);
app.use('/api/fincaPersona', finca_persona_routes);
app.use('/api/fincaTrabajador', finca_trabajador_routes);
app.use('/api/personaParentezco', persona_parentezco_routes);

module.exports = app;
