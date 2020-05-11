"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UsuariosSchema = new Schema({
    profile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id_person: {
        type: Schema.Types.ObjectId,
        ref: 'tbl_personas',
        required: true
    }
});
//# sourceMappingURL=usuarios.schema.js.map