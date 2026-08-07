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
exports.registroService = void 0;
const RE_entity_1 = require("./../entities/RE.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const agente_service_1 = require("../../Agente/Service/agente.service");
let registroService = class registroService {
    registroEntity;
    agenteService;
    dataAtual;
    constructor(registroEntity, agenteService) {
        this.registroEntity = registroEntity;
        this.agenteService = agenteService;
        this.dataAtual = [];
    }
    async consultar(x) {
        const { CohereClientV2 } = require('cohere-ai');
        const cohere = new CohereClientV2({
            token: process.env.CO_API_KEY
        });
        try {
            console.log('entrou NA API COHERE');
            const response = await cohere.chat({
                model: 'command-a-plus-05-2026',
                messages: [
                    {
                        role: 'user',
                        content: ` encurte a responda em no maximo 6 linhas ${x.agente.PromptPrincipal}   ${x.mensagemDeEntrada}`,
                    },
                ],
            });
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
    async dataPegar() {
        let dat = new Date();
        let dataAtual = dat.toLocaleDateString('pt-BR');
        console.log("DAAPEGAR" + dataAtual);
        return dataAtual;
    }
    async delete(x) {
        return await this.registroEntity.delete(x);
    }
    async create(x) {
        const inicio = performance.now();
        const arrayData = [];
        const agenteBanco = await this.agenteService.findById(x.agente.id);
        const dataHoje = await this.dataPegar();
        console.log(typeof (x.agente.id));
        console.log('entrou noo create');
        const dataultimo = agenteBanco?.registroExecucao[0]?.data;
        console.log(dataHoje + "" + "data no create");
        const usuario = x.agente.usuario?.status;
        if (usuario === 'premium') {
            if (dataHoje)
                if (dataultimo) {
                    if (dataHoje.split(" ")[4] !== dataultimo.split(" ")[4]) {
                        alert("tokens mensais renovados!");
                        agenteBanco.LimiteMaxMensal = 10000;
                    }
                    if (dataHoje !== dataultimo) {
                        if (agenteBanco) {
                            alert("Tokens renovados do dia!");
                            agenteBanco.LimiteMaxToken = 20000;
                        }
                    }
                }
                else {
                    if (agenteBanco) {
                        if (dataHoje.split(" ")[4] !== dataultimo?.split(" ")[4]) {
                            agenteBanco.LimiteMaxMensal = 50000;
                        }
                        if (dataHoje !== dataultimo) {
                            agenteBanco.LimiteMaxToken = 10000;
                        }
                    }
                }
        }
        if (agenteBanco) {
            if (agenteBanco?.LimiteMaxToken <= 0) {
                throw new common_1.HttpException("Espere 24 horas para desbloquear o chat", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        if (!agenteBanco) {
            throw new common_1.HttpException("não existe essa ia ", common_1.HttpStatus.NOT_FOUND);
        }
        const ia = await this.consultar(x);
        console.log(x);
        console.log(ia);
        x.quantidadeDeTokensDeEntrada = ia.usage.billedUnits.inputTokens;
        x.quantidadeDeTokensDeSaida = ia.usage.billedUnits.outputTokens;
        x.totaldeTokens = x.quantidadeDeTokensDeSaida + x.quantidadeDeTokensDeEntrada;
        x.data = dataHoje;
        console.log(x.data);
        console.log("passou da data ");
        if (ia.message.content.length > 1) {
            console.log('mais de um elemento dentro do array');
            x['think'] = ia.message.content[0]['type'];
            x['thinking'] = ia.message.content[0]['thinking'];
            x.mensagemDeSaida = ia.message.content[1].text;
            console.log(ia.message.content[0]['type'] + '...');
            console.log(ia.message.content[0]['thinking']);
            console.log(x.mensagemDeSaida);
        }
        else {
            x.mensagemDeSaida = ia.message.content[0].text;
            console.log(ia.message.content[0]['text']);
        }
        console.log(x.totaldeTokens);
        console.log('entrou');
        if (agenteBanco?.Status === 'true') {
            x.totaldeTokens =
                x.quantidadeDeTokensDeSaida + x.quantidadeDeTokensDeEntrada;
            agenteBanco['LimiteMaxMensal'] -=
                x.quantidadeDeTokensDeSaida + x.quantidadeDeTokensDeEntrada;
            agenteBanco.LimiteMaxToken -= x.totaldeTokens;
            if (agenteBanco.LimiteMaxMensal <= 0) {
                throw new common_1.HttpException('Limite excedido do ', common_1.HttpStatus.BAD_REQUEST);
            }
            else if (agenteBanco.LimiteMaxToken < x.totaldeTokens) {
                throw new common_1.HttpException('Limite excedido de tokens do dia !', common_1.HttpStatus.BAD_REQUEST);
            }
            await this.agenteService.Updated(agenteBanco);
            const final = performance.now();
            const perfomanceTime = Number((final - inicio).toFixed(2));
            x.tempoDeExecucaoEmMilissegundos = perfomanceTime;
            return this.registroEntity.save(x);
        }
        return x;
    }
};
exports.registroService = registroService;
exports.registroService = registroService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(RE_entity_1.registroEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        agente_service_1.AgenteService])
], registroService);
//# sourceMappingURL=RE.service.js.map