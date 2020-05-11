import { Document } from 'mongoose';

export interface Usuarios extends Document {
  _doc:Object,
  readonly email: string,
  password: string,
  profile: string,
  id_person: string,
}