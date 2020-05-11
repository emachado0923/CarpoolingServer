"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const personas_controller_1 = require("./personas.controller");
const personas_service_1 = require("./personas.service");
const personas_providers_1 = require("./personas.providers");
const database_module_1 = require("../../DB/database.module");
const usuarios_module_1 = require("../Usuarios/usuarios.module");
const usuarios_service_1 = require("../Usuarios/usuarios.service");
const usuarios_providers_1 = require("../Usuarios/usuarios.providers");
let PersonasModule = class PersonasModule {
};
PersonasModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, usuarios_module_1.UsuariosModule],
        controllers: [personas_controller_1.PersonasController],
        providers: [personas_service_1.PersonasService, usuarios_service_1.UsuariosServices, ...personas_providers_1.personasProviders, ...usuarios_providers_1.UsuariosProviders],
    })
], PersonasModule);
exports.PersonasModule = PersonasModule;
//# sourceMappingURL=personas.module.js.map