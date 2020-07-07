var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    tipo_doc: {
        type: String,
        required: true
    },
    numero_doc: {
        type: Number,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: false,
        default: true
    },
    dirección: {
        type: String,
        required: true
    },
    centro: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        default: ''
    },
    vehiculo: {
        marca: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false
        },
        placa: {
            type: String,
            required: false
        },
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema)