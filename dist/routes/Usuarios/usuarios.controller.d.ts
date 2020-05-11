import { CrearUsuariosDto } from './dto/crear-usuario.dto';
import { UsuariosServices } from './usuarios.service';
import { Usuarios } from './interfaces/usuarios.interface';
export declare class UsuariosController {
    private readonly usuariosServices;
    constructor(usuariosServices: UsuariosServices);
    create(crearUsuariosDto: CrearUsuariosDto): Promise<Usuarios>;
    findAll(): Promise<Usuarios[]>;
    findOne(id: any): Promise<Usuarios[]>;
    update(id: any, updatePersonasDto: CrearUsuariosDto): Promise<Usuarios>;
    delete(id: any): Promise<Usuarios>;
}
