const express = require('express');
var usuarioController = require('../controllers/usuariosController')
const multer = require('../libs/multer')
var router = express.Router();

router.get('/usuario', usuarioController.listar);

router.post('/usuario', usuarioController.registrar);

router.post('/foto', multer.single('foto'), usuarioController.registrarFoto);

router.get('/usuario/:id', usuarioController.ver);

router.put('/pasajero/:id', usuarioController.editarPasajero);

router.put('/conductor/:id', usuarioController.editarConductor);

router.put('/foto/:id', multer.single('foto'), usuarioController.editarFoto);

router.delete('/usuario/:id/:estado', usuarioController.eliminar);

module.exports = router;
