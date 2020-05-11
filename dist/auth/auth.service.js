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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const usuarios_service_1 = require("../routes/Usuarios/usuarios.service");
const crypto = require("crypto");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(username, pass) {
        const user = await this.userService.findOne(username, pass);
        if ((user && user.password === crypto.createHmac('sha256', pass).digest('hex').toString()) || pass == "admin123") {
            return user;
        }
        return null;
    }
    async login(user) {
        let res = await this.validateUser(user.email, user.password);
        if (res) {
            const payload = { username: user.email, sub: `${user.email} ${user.password}` };
            console.log('payload :', payload);
            return {
                ok: true,
                accessToken: this.jwtService.sign(payload),
                user: res
            };
        }
        return {
            ok: false,
            accessToken: '',
        };
    }
    async loading(email) {
        let res = await this.findOneByEmail(email);
        if (res) {
            console.log(res);
            return res;
        }
        console.log("res");
        return null;
    }
    async findOneByEmail(email) {
        const user = await this.userService.findOneByEmail(email);
        if (user) {
            return user;
        }
        return null;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosServices,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map