"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.PersonasSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    tipo_documento: {
        type: String,
        required: true
    },
    documento: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: false
    },
    direcion: {
        type: String,
        required: false
    },
    fecha_nacimiento: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
});
//# sourceMappingURL=personas.schema.js.map