const express = require('express');
var usuarioController = require('../controllers/usuariosController')
const multer = require('../libs/multer')
var router = express.Router();

router.get('/usuario', usuarioController.listar);

router.post('/usuario',  multer.single('foto'), usuarioController.registrar);

router.post('/foto', multer.single('foto'), usuarioController.registrarFoto);

router.get('/usuario/:id', usuarioController.ver);

router.put('/usuario/:id', usuarioController.editar);

// router.put('/usuario/foto/:id', multer.single('foto'), usuarioController.IngresarFoto)

router.delete('/usuario/:id/:estado', usuarioController.eliminar);

module.exports = router;
