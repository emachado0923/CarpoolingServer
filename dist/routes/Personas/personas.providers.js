"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personas_schema_1 = require("./schemas/personas.schema");
exports.personasProviders = [
    {
        provide: 'PERSONAS_MODEL',
        useFactory: (connection) => connection.model('tbl_personas', personas_schema_1.PersonasSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=personas.providers.js.map