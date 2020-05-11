import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { personasProviders } from './personas.providers';
import { DatabaseModule } from '../../DB/database.module';

import { UsuariosModule } from "../Usuarios/usuarios.module";
import { UsuariosServices } from '../Usuarios/usuarios.service';
import { UsuariosProviders } from '../Usuarios/usuarios.providers';

@Module({
  imports: [DatabaseModule,UsuariosModule],
  controllers: [PersonasController],
  providers: [PersonasService,UsuariosServices, ...personasProviders, ...UsuariosProviders],
})
export class PersonasModule {}