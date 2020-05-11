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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let PersonasService = class PersonasService {
    constructor(personasModel) {
        this.personasModel = personasModel;
    }
    async create(crearPersonasDto) {
        console.log('Creo ', crearPersonasDto);
        const crearPersonas = new this.personasModel(crearPersonasDto);
        return await crearPersonas.save();
    }
    async findAll() {
        console.log("Busco todo");
        return await this.personasModel.find();
    }
    async update(id, persona) {
        console.log("Actualizo = ", id, " ", persona);
        return await this.personasModel.updateOne({ _id: id }, persona);
    }
    async delete(id) {
        console.log("Elimino = ", id);
        return await this.personasModel.deleteOne({ _id: id });
    }
};
PersonasService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('PERSONAS_MODEL')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], PersonasService);
exports.PersonasService = PersonasService;
//# sourceMappingURL=personas.service.js.map