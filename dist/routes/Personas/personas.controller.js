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
const crear_personas_dto_1 = require("./dto/crear-personas.dto");
const personas_service_1 = require("./personas.service");
const usuarios_service_1 = require("../Usuarios/usuarios.service");
let PersonasController = class PersonasController {
    constructor(personasService, usuariosServices) {
        this.personasService = personasService;
        this.usuariosServices = usuariosServices;
    }
    async create(crearPersonasDto) {
        return await this.personasService.create(crearPersonasDto)
            .then(res => {
            let user = {
                email: res.email,
                password: res.documento.toString(),
                profile: "ninguno",
                id_person: res._id
            };
            this.usuariosServices.create(user);
            return {
                ok: true,
                person: res
            };
        })
            .catch(MessageError => {
            return {
                ok: false,
                person: [],
                MessageError
            };
        });
    }
    async findAll() {
        return this.personasService.findAll();
    }
    async update(id, updatePersonasDto) {
        return this.personasService.update(id, updatePersonasDto);
    }
    async delete(id) {
        console.log('pero si :');
        return this.personasService.delete(id);
    }
};
__decorate([
    common_1.Post("/save"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_personas_dto_1.CrearPersonasDto]),
    __metadata("design:returntype", Promise)
], PersonasController.prototype, "create", null);
__decorate([
    common_1.Get("/findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonasController.prototype, "findAll", null);
__decorate([
    common_1.Put("/update/:id"),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, crear_personas_dto_1.CrearPersonasDto]),
    __metadata("design:returntype", Promise)
], PersonasController.prototype, "update", null);
__decorate([
    common_1.Delete("/delete/:id"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PersonasController.prototype, "delete", null);
PersonasController = __decorate([
    common_1.Controller('person'),
    __metadata("design:paramtypes", [personas_service_1.PersonasService,
        usuarios_service_1.UsuariosServices])
], PersonasController);
exports.PersonasController = PersonasController;
//# sourceMappingURL=personas.controller.js.map