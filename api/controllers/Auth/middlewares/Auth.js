const verificaToken = require('./autentication');
const express = require('express');
const app= express();

app.get("/validation/token/:token",verificaToken.verificaToken);


module.exports = app;