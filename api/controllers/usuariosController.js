var Usuario = require('../models/usuariosModel');
var bcrypt = require('bcrypt');

let listar = (req, res) => {
    // let usuario = new Usuario();
    Usuario.find({}).exec((err, datos) => {
        return res.json({
            datos
        })
    })
}

let registrar = (req, res) => {
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tipo_doc: req.body.tipo_doc,
        numero_doc: req.body.numero_doc,
        celular: req.body.celular,
        correo: req.body.correo,
        dirección: req.body.dirección,
        centro: req.body.centro,
        profile: req.body.profile,
        vehiculo: req.body.vehiculo,
        contraseña: bcrypt.hashSync(req.body.contraseña, 10)
    });

    usuario.save((err, usuarioNew) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        return res.status(201).json({
            ok: true,
            usuario: usuarioNew
        });
    });
}


let ver = (req, res) => {

    Usuario.findById(req.params.id).exec((err, datos) => {
        return res.json({
            datos
        })
    })
}


let editar = (req, res) => {
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        dirección: req.body.dirección,
        centro: req.body.centro,
        contraseña: bcrypt.hashSync(req.body.contraseña, 10)
    }

    Usuario.findByIdAndUpdate(req.params.id, { $set: usuario }, { new: true }, (err, usuarioNew) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            usuarioNew
        })
    });
}

let eliminar = (req, res) => {

    Usuario.findByIdAndUpdate(req.params.id, { estado: req.params.estado }, { new: true }, (err, usuarioNew) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            usuarioNew
        })
    });
}

module.exports = {
    listar,
    registrar,
    ver,
    editar,
    eliminar
}