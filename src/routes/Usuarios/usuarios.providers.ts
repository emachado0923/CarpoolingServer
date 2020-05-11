import { Connection } from 'mongoose';
import { UsuariosSchema } from './schemas/usuarios.schema';

export const UsuariosProviders = [
  {
    provide: 'USUARIOS_MODEL',
    useFactory: (connection: Connection) => connection.model('tbl_usuarios', UsuariosSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];