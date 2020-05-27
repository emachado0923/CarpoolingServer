const express = require('express');

var app = express();

//Url inicial
app.get('/', function (req, res) {
    res.send('Bienvenido al API REST');
});


app.use('/api', require('./usuariosRoutes'));

module.exports = app;
