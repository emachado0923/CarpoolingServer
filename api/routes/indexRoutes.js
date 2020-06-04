const express = require('express');

var app = express();

//Usa la utenticación y el login
app.use(require('../controllers/Auth/loginController'));
app.use(require('../controllers/Auth/middlewares/Auth'));



//Url inicial
app.get('/', function (req, res) {
    res.send('Bienvenido al API REST');
});


app.use('/api', require('./usuariosRoutes'));

module.exports = app;
