import { Model } from 'mongoose';
import { CrearUsuariosDto } from './dto/crear-usuario.dto';
import { Usuarios } from './interfaces/usuarios.interface';
export declare class UsuariosServices {
    private readonly usuariosModel;
    constructor(usuariosModel: Model<Usuarios>);
    create(crearUsuariosDto: CrearUsuariosDto): Promise<Usuarios>;
    findAll(): Promise<Usuarios[]>;
    findOneById(id: any): Promise<Usuarios[]>;
    update(id: any, persona: CrearUsuariosDto): Promise<Usuarios>;
    delete(id: any): Promise<Usuarios>;
    findOne(email: string, password: string): Promise<Usuarios>;
    findOneByEmail(email: string): Promise<Usuarios>;
}
