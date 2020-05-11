"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("../DB/database.module");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const constants_1 = require("./constants");
const jwt_strategy_1 = require("./jwt.strategy");
const local_strategy_1 = require("./local.strategy");
const usuarios_module_1 = require("../routes/Usuarios/usuarios.module");
const usuarios_controller_1 = require("../routes/Usuarios/usuarios.controller");
const usuarios_service_1 = require("../routes/Usuarios/usuarios.service");
const usuarios_providers_1 = require("../routes/Usuarios/usuarios.providers");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, usuarios_module_1.UsuariosModule, jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '12h' },
            })],
        controllers: [auth_controller_1.AuthController, usuarios_controller_1.UsuariosController],
        providers: [usuarios_service_1.UsuariosServices, auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, ...usuarios_providers_1.UsuariosProviders],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map