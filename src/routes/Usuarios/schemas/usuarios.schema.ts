
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UsuariosSchema = new Schema({
    profile:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    id_person:{
        type : Schema.Types.ObjectId,
        ref: 'tbl_personas',
        required: true
    }
});