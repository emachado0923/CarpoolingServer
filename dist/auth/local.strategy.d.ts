import { AuthService } from './auth.service';
import { Usuarios } from '../routes/Usuarios/interfaces/usuarios.interface';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<Usuarios>;
}
export {};
