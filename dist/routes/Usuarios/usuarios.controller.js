"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const crear_usuario_dto_1 = require("./dto/crear-usuario.dto");
const usuarios_service_1 = require("./usuarios.service");
let UsuariosController = class UsuariosController {
    constructor(usuariosServices) {
        this.usuariosServices = usuariosServices;
    }
    async create(crearUsuariosDto) {
        return await this.usuariosServices.create(crearUsuariosDto);
    }
    async findAll() {
        return this.usuariosServices.findAll();
    }
    async findOne(id) {
        return this.usuariosServices.findOneById(id);
    }
    async update(id, updatePersonasDto) {
        console.log('pero si :', updatePersonasDto);
        return this.usuariosServices.update(id, updatePersonasDto);
    }
    async delete(id) {
        console.log('pero si :');
        return this.usuariosServices.delete(id);
    }
};
__decorate([
    common_1.Post("/save"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_usuario_dto_1.CrearUsuariosDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "create", null);
__decorate([
    common_1.Get("/findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findAll", null);
__decorate([
    common_1.Get("/findOneById/:id"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findOne", null);
__decorate([
    common_1.Put("/update/:id"),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, crear_usuario_dto_1.CrearUsuariosDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "update", null);
__decorate([
    common_1.Delete("/delete/:id"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "delete", null);
UsuariosController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosServices])
], UsuariosController);
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuarios.controller.js.map