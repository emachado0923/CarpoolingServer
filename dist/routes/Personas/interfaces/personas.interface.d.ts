import { Document } from 'mongoose';
export interface Personas extends Document {
    _id: string;
    readonly nombre: string;
    readonly apellido: string;
    readonly tipo_documento: string;
    readonly documento: number;
    readonly email: string;
    readonly telefono: number;
    readonly direcion: string;
    readonly fecha_nacimiento: string;
    readonly ciudad: string;
}
