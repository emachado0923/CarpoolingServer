import { JwtService } from '@nestjs/jwt';
import { UsuariosServices } from '../routes/Usuarios/usuarios.service';
import { Usuarios } from '../routes/Usuarios/interfaces/usuarios.interface';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsuariosServices, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<Usuarios>;
    login(user: Usuarios): Promise<{
        ok: boolean;
        accessToken: string;
        user: Usuarios;
    } | {
        ok: boolean;
        accessToken: string;
        user?: undefined;
    }>;
    loading(email: any): Promise<Usuarios>;
    findOneByEmail(email: string): Promise<Usuarios>;
}
