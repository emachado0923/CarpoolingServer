"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_schema_1 = require("./schemas/usuarios.schema");
exports.UsuariosProviders = [
    {
        provide: 'USUARIOS_MODEL',
        useFactory: (connection) => connection.model('tbl_usuarios', usuarios_schema_1.UsuariosSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=usuarios.providers.js.map