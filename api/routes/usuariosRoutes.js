const express = require('express');
var usuarioController = require('../controllers/usuariosController')
var router = express.Router();

router.get('/usuario', usuarioController.listar);

router.post('/usuario', usuarioController.registrar);

router.get('/usuario/:id', usuarioController.ver);

router.put('/usuario/:id', usuarioController.editar);

router.delete('/usuario/:id/:estado', usuarioController.eliminar);

module.exports = router;