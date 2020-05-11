import { CrearPersonasDto } from './dto/crear-personas.dto';
import { PersonasService } from './personas.service';
import { Personas } from './interfaces/Personas.interface';
import { UsuariosServices } from '../Usuarios/usuarios.service';
export declare class PersonasController {
    private readonly personasService;
    private readonly usuariosServices;
    constructor(personasService: PersonasService, usuariosServices: UsuariosServices);
    create(crearPersonasDto: CrearPersonasDto): Promise<{
        ok: boolean;
        person: Personas;
    } | {
        ok: boolean;
        person: any[];
        MessageError: any;
    }>;
    findAll(): Promise<Personas[]>;
    update(id: any, updatePersonasDto: CrearPersonasDto): Promise<Personas>;
    delete(id: any): Promise<Personas>;
}
