import { Module } from '@nestjs/common';
import { PersonasModule } from './routes/Personas/personas.module';
import { UsuariosModule } from './routes/Usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PersonasModule,
    UsuariosModule,
    AuthModule
  ],
})
export class AppModule {}
