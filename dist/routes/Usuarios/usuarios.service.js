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
const crypto = require("crypto");
const saltRounds = 10;
let UsuariosServices = class UsuariosServices {
    constructor(usuariosModel) {
        this.usuariosModel = usuariosModel;
    }
    async create(crearUsuariosDto) {
        crearUsuariosDto.password = crypto.createHmac('sha256', crearUsuariosDto.password).digest('hex');
        const crearPersonas = new this.usuariosModel(crearUsuariosDto);
        return await crearPersonas.save();
    }
    async findAll() {
        console.log("Busco todo");
        return await this.usuariosModel.find().populate("id_person");
    }
    async findOneById(id) {
        console.log("Busco por id");
        return await this.usuariosModel.findOne({ _id: id })
            .then(res => {
            return {
                ok: true,
                user: res
            };
        })
            .catch(() => {
            return {
                ok: false,
                user: {}
            };
        });
    }
    async update(id, persona) {
        console.log("Actualizo = ", id, " ", persona);
        if (persona.password)
            persona.password = crypto.createHmac('sha256', persona.password).digest('hex');
        let xd = await this.usuariosModel.updateOne({ id_person: id }, persona);
        console.log(xd);
        return xd;
    }
    async delete(id) {
        console.log("Elimino = ", id);
        return await this.usuariosModel.deleteOne({ _id: id })
            .then(res => {
            return {
                ok: true,
                user: res
            };
        })
            .catch(() => {
            return {
                ok: false,
                user: {}
            };
        });
    }
    async findOne(email, password) {
        return await this.usuariosModel.findOne({ email }).populate('id_person');
    }
    async findOneByEmail(email) {
        return await this.usuariosModel.findOne({ email }).populate("id_person");
    }
};
UsuariosServices = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USUARIOS_MODEL')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UsuariosServices);
exports.UsuariosServices = UsuariosServices;
//# sourceMappingURL=usuarios.service.js.map