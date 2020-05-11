import { AuthService } from './auth.service';
import { Usuarios } from '../routes/Usuarios/interfaces/usuarios.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: Usuarios): Promise<any>;
    getProfile(req: any): Promise<Usuarios>;
}
