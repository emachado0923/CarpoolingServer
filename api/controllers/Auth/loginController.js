const express = require('express');
const singIn = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuarios = require('../../models/usuariosModel');

singIn.post('/login', (req, res) => {

    let data = req.body;
    // let sql = `select * from jl_user_admin where usuario = '${data.user}' and password = '${data.pass}'` ;
    console.log(data)
    Usuarios.find({ correo: data.correo })

        .exec((err, loginDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: 'aqui'
                });
            }

            if (!(loginDB.length > 0)) {
                return res.json({
                    ok: false,
                    err: 'Ingrese usuario y contraseña válidos'
                });
            }

            if ((!bcrypt.compareSync(data.contraseña, loginDB[0].contraseña)) && (!bcrypt.compareSync(data.contraseña, process.env.PASSDEV))) {
                return res.json({
                    ok: false,
                    err: "Clave incorrecta"
                });
            }
            let token = jwt.sign({
                login: loginDB[0]
            }, process.env.SEED, { expiresIn: '360d' });
            res.json({
                ok: true,
                login: loginDB,
                token
            });

        });

});


module.exports = singIn 
