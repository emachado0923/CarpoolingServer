import { Model } from 'mongoose';
import { CrearPersonasDto } from './dto/crear-personas.dto';
import { Personas } from './interfaces/personas.interface';
export declare class PersonasService {
    private readonly personasModel;
    constructor(personasModel: Model<Personas>);
    create(crearPersonasDto: CrearPersonasDto): Promise<Personas>;
    findAll(): Promise<Personas[]>;
    update(id: any, persona: CrearPersonasDto): Promise<Personas>;
    delete(id: any): Promise<Personas>;
}
