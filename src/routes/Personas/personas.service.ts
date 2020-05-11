import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CrearPersonasDto } from './dto/crear-personas.dto';
import { Personas } from './interfaces/personas.interface';

@Injectable()
export class PersonasService {
  constructor(@Inject('PERSONAS_MODEL') private readonly personasModel: Model<Personas>) {}

  async create(crearPersonasDto: CrearPersonasDto): Promise<Personas> {
    console.log('Creo ', crearPersonasDto)
    const crearPersonas = new this.personasModel(crearPersonasDto);
    return await crearPersonas.save();
  }

  async findAll(): Promise<Personas[]> {
    console.log("Busco todo");
    return await this.personasModel.find();
  }

  async update(id,persona: CrearPersonasDto): Promise<Personas> {
    console.log("Actualizo = ",id," ",persona);
    return await this.personasModel.updateOne({_id:id},persona);
  }

  async delete(id): Promise<Personas> {
    console.log("Elimino = ",id,);
    return await this.personasModel.deleteOne({_id:id});
  }
}