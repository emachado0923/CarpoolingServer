import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CrearUsuariosDto } from './dto/crear-usuario.dto';
import { Usuarios } from './interfaces/usuarios.interface';

import * as crypto from 'crypto';
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

@Injectable()
export class UsuariosServices {
  constructor(@Inject('USUARIOS_MODEL') private readonly usuariosModel: Model<Usuarios>) { }

  async create(crearUsuariosDto: CrearUsuariosDto): Promise<Usuarios> {
    crearUsuariosDto.password = crypto.createHmac('sha256', crearUsuariosDto.password).digest('hex');
    const crearPersonas = new this.usuariosModel(crearUsuariosDto);
    return await crearPersonas.save();
  }

  async findAll(): Promise<Usuarios[]> {
    console.log("Busco todo");
    return await this.usuariosModel.find().populate("id_person");
  }

  async findOneById(id): Promise<Usuarios[]> {
    console.log("Busco por id");
    return await this.usuariosModel.findOne({ _id: id })
      .then(res => {
        return {
          ok: true,
          user: res
        };
      })
      .catch(() => {
        return {
          ok: false,
          user: {}
        };
      })
  }

  async update(id, persona: CrearUsuariosDto): Promise<Usuarios> {
    console.log("Actualizo = ", id, " ", persona);
    if(persona.password) persona.password = crypto.createHmac('sha256', persona.password).digest('hex');
    let xd = await this.usuariosModel.updateOne({ id_person: id }, persona)
    console.log(xd);
    return xd
  }

  async delete(id): Promise<Usuarios> {
    console.log("Elimino = ", id);
    return await this.usuariosModel.deleteOne({ _id: id })
      .then(res => {
        return {
          ok: true,
          user: res
        };
      })
      .catch(() => {
        return {
          ok: false,
          user: {}
        };
      })
  }

  async findOne(email: string, password: string): Promise<Usuarios> {
    return await this.usuariosModel.findOne({ email }).populate('id_person');

  }

  async findOneByEmail(email: string): Promise<Usuarios> {
    return await this.usuariosModel.findOne({ email }).populate("id_person");
  }
}