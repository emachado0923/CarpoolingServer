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

let registrar =  ( req, res) => {
    const {file} = req
    console.log(req.file);
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
        vehiculo: {
            marca: req.body.marca,
            color: req.body.color,
            placa: req.body.placa,
        },
        contraseña: bcrypt.hashSync(req.body.contraseña, 10),
        foto: req.body.foto
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

let registrarFoto = (req,res)=>{
    res.json({
        ok: true
    })
    console.log('Registrar foto')
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
    }

    Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true}, (err, usuarioNew) => {
        if (err) {
            console.log(err)
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

    Usuario.findByIdAndUpdate(req.params.id, {estado: req.params.estado}, {new: true}, (err, usuarioNew) => {
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

// let IngresarFoto = async (req, res) => {

//     const {file} = req

//     if (file) {
//         try {
//             await Usuario.findByIdAndUpdate(req.params.id, {foto: file.path}, {new: true})
//             res.json({message: 'Ingresado con exito'})

//         } catch (e) {

//             console.log('Error =' + e)
//             res.status(400).json(e)

//         }
//     } else {
//         res.status(400).json({error: 'no hay archivos'})
//     }
// }
module.exports = {
    listar,
    registrar,
    registrarFoto,
    ver,
    editar,
    eliminar,
    // IngresarFoto
}
