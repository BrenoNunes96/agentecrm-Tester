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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("../../usuario/services/usuario.service");
const bcrypt_1 = require("../bcrypt/bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    usuarioServices;
    jwt;
    bcrypt;
    constructor(usuarioServices, jwt, bcrypt) {
        this.usuarioServices = usuarioServices;
        this.jwt = jwt;
        this.bcrypt = bcrypt;
    }
    async validarUser(usuario, senha) {
        const buscarUsuario = await this.usuarioServices.findbyname(usuario);
        if (!buscarUsuario)
            throw new common_1.HttpException("usuario ou senha não corresposndem", common_1.HttpStatus.NOT_FOUND);
        const compararSenha = await this.bcrypt.CompararSenha(senha, buscarUsuario.senha);
        if (!compararSenha)
            throw new common_1.HttpException("usuario ou senha não correspondem", common_1.HttpStatus.NOT_FOUND);
        return buscarUsuario;
    }
    async login(usuario, senha) {
        let buscarUsuario = await this.usuarioServices.findbyname(usuario);
        const payload = { sub: buscarUsuario?.usuario };
        return {
            id: buscarUsuario?.id,
            usuario: buscarUsuario?.usuario,
            token: `Bearer ${this.jwt.sign(payload)} `
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => usuario_service_1.usuarioService))),
    __metadata("design:paramtypes", [usuario_service_1.usuarioService, jwt_1.JwtService, bcrypt_1.Bcrypt])
], AuthService);
//# sourceMappingURL=AuthService.service.js.map