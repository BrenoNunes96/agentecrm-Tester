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
exports.AgenteService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const agente_entity_1 = require("../Entities/agente.entity");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("../../usuario/services/usuario.service");
const authService_service_1 = require("../../auth/Service/authService.service");
let AgenteService = class AgenteService {
    agente;
    usuario;
    authLogin;
    constructor(agente, usuario, authLogin) {
        this.agente = agente;
        this.usuario = usuario;
        this.authLogin = authLogin;
    }
    async Create(x) {
        const name = await this.findByName(x.NomeAgente);
        const usuarios = await this.usuario.UsuarioId(x.usuario?.id);
        console.log(usuarios);
        if (usuarios) {
            x.usuario = usuarios;
        }
        if (usuarios?.status !== "premium") {
            if (x.LimiteMaxMensal > 200000) {
                alert("Limite maximo mensal de 200.000 tokens!");
            }
            else if (x.LimiteMaxToken > 20000) {
                alert("Limite maximo de token por dia excedido!");
            }
        }
        if (usuarios?.status === 'free') {
            if (x.LimiteMaxMensal > 100000) {
                alert("limite maximo mensal de 100.000");
            }
            else if (x.LimiteMaxToken > 10000) {
                alert('limite excedido de tokens por dia !');
            }
        }
        if (name) {
            throw new common_1.HttpException('agente ja existente com mesmo nome', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!usuarios) {
            throw new common_1.HttpException("usuario não existente", common_1.HttpStatus.BAD_GATEWAY);
        }
        return await this.agente.save(x);
    }
    async Findall() {
        return await this.agente.find({ relations: { registroExecucao: true, usuario: true } });
    }
    async findByName(NomeAgente) {
        if (!NomeAgente) {
            throw new common_1.HttpException('não foi possivel achar o nome do agente', common_1.HttpStatus.NOT_FOUND);
        }
        return this.agente.findOne({
            where: { NomeAgente: (0, typeorm_2.ILike)(`%${NomeAgente}%`) },
            relations: { registroExecucao: true },
        });
    }
    async findById(id) {
        return await this.agente.findOne({
            where: { id },
            relations: { registroExecucao: true, usuario: true },
        });
    }
    async Updated(x) {
        await this.findById(x.id);
        const nomeAgente = await this.findByName(x['NomeAgente']);
        if (nomeAgente && nomeAgente.id !== x.id) {
            throw new common_1.HttpException('não pode repetir o nome do agente !', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.agente.save(x);
    }
    async Delete(id) {
        let agentes = await this.findById(id);
        if (agentes?.id === 0 || agentes?.id === 1) {
            throw new common_1.HttpException("não pode deletar ", common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.agente.delete(id);
    }
    async mediaTokens() {
        const agenteFinal = [];
        const registroExecucao = [];
        const agente = await this.Findall();
        const accAcum = [];
        for (const x of agente) {
            registroExecucao.push({ [x.id]: x.registroExecucao });
        }
        const i = [];
        console.log(registroExecucao);
        for (const x of registroExecucao) {
            const indice = Object.keys(x)[0];
            for (const y of x[indice]) {
                i.push({ [indice]: y['totaldeTokens'] });
            }
        }
        console.log(i);
        const MediaTokenReduce = i.reduce((acc, item) => {
            if (!acc[Object.keys(item)[0]]) {
                acc[Object.keys(item)[0]] = { somando: 0, contando: 0, media: 0 };
            }
            const indice = Object.keys(item)[0];
            console.log(indice);
            acc[indice].somando += item[indice];
            acc[indice].contando += 1;
            acc[indice].media = acc[indice].somando / acc[indice].contando;
            return acc;
        }, {});
        const arrayMediRe = [MediaTokenReduce];
        console.log(arrayMediRe);
        const arrayMediR2e = [];
        for (const x of agente) {
            for (const y of arrayMediRe) {
                for (const i in y) {
                    if (Number(i) === x.id) {
                        arrayMediR2e.push({ nome: x.NomeAgente, media: y[i].media });
                    }
                }
            }
        }
        const x = arrayMediR2e.sort((a, b) => a.media - b.media);
        console.log(x);
        return x;
    }
};
exports.AgenteService = AgenteService;
exports.AgenteService = AgenteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(agente_entity_1.AgenteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        usuario_service_1.usuarioService,
        authService_service_1.AuthService])
], AgenteService);
//# sourceMappingURL=agente.service.js.map