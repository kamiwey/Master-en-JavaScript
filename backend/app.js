
'use strict'
     
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors'); 
 
var app = express();
 
// cargar archivos de rutas
var project_routes = require('./routes/project');
 
// Middlewears
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
 
// Rutas
app.use('/api', project_routes);

// exportar
module.exports = app;