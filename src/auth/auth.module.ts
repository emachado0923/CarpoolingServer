import { Module } from '@nestjs/common';
import { DatabaseModule } from '../DB/database.module';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service'
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

import { UsuariosModule } from '../routes/Usuarios/usuarios.module';
import { UsuariosController } from '../routes/Usuarios/usuarios.controller';
import { UsuariosServices } from '../routes/Usuarios/usuarios.service';
import { UsuariosProviders } from '../routes/Usuarios/usuarios.providers';

@Module({
    imports: [DatabaseModule,UsuariosModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '12h' },
    })],
    controllers: [AuthController, UsuariosController],
    providers: [UsuariosServices, AuthService, LocalStrategy, JwtStrategy, ...UsuariosProviders],
})
export class AuthModule { }