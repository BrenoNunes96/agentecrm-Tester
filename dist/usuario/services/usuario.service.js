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
exports.usuarioService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../entities/usuario.entity");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("../../auth/bcrypt/bcrypt");
let usuarioService = class usuarioService {
    bcrypt;
    usuario;
    constructor(bcrypt, usuario) {
        this.bcrypt = bcrypt;
        this.usuario = usuario;
    }
    async deletar(x) {
        return this.usuario.delete(x);
    }
    async findbyname(usuario) {
        return await this.usuario.findOne({ where: { usuario } });
    }
    async atualizar(x) {
        let usuarios = await this.findbyname(x?.usuario);
        if (usuarios && usuarios?.id !== x.id) {
            throw new common_1.HttpException("ja existe usuario com o mesmo nome!", common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.usuario.save(x);
    }
    async create(x) {
        let usuarioCadastro = await this.findbyname(x.usuario);
        if (usuarioCadastro) {
            throw new common_1.HttpException("mesmo usuario escolha outro", common_1.HttpStatus.BAD_REQUEST);
        }
        x.senha = await this.bcrypt.CryptgrafarSenha(x.senha);
        return await this.usuario.save(x);
    }
    async findAll() {
        return this.usuario.find({ relations: {
                agente: true
            } });
    }
};
exports.usuarioService = usuarioService;
exports.usuarioService = usuarioService = __decorate([
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.usuarioEntity)),
    __metadata("design:paramtypes", [bcrypt_1.Bcrypt,
        typeorm_2.Repository])
], usuarioService);
//# sourceMappingURL=usuario.service.js.map