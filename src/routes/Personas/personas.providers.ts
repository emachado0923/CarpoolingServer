import { Connection } from 'mongoose';
import { PersonasSchema } from './schemas/personas.schema';

export const personasProviders = [
  {
    provide: 'PERSONAS_MODEL',
    useFactory: (connection: Connection) => connection.model('tbl_personas', PersonasSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];