import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosServices } from './usuarios.service';
import { UsuariosProviders } from './usuarios.providers';
import { DatabaseModule } from '../../DB/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [UsuariosServices, ...UsuariosProviders],
})
export class UsuariosModule {}