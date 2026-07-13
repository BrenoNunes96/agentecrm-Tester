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
exports.registroEntity = void 0;
const typeorm_1 = require("typeorm");
const agente_entity_1 = require("../../Agente/Entities/agente.entity");
const swagger_1 = require("@nestjs/swagger");
let registroEntity = class registroEntity {
    id;
    mensagemDeEntrada;
    mensagemDeSaida;
    quantidadeDeTokensDeEntrada;
    quantidadeDeTokensDeSaida;
    totaldeTokens;
    tempoDeExecucaoEmMilissegundos;
    agente;
};
exports.registroEntity = registroEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], registroEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], registroEntity.prototype, "mensagemDeEntrada", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], registroEntity.prototype, "mensagemDeSaida", void 0);
__decorate([
    (0, typeorm_1.Column)({ "type": "int", nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], registroEntity.prototype, "quantidadeDeTokensDeEntrada", void 0);
__decorate([
    (0, typeorm_1.Column)({ "type": "int", nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], registroEntity.prototype, "quantidadeDeTokensDeSaida", void 0);
__decorate([
    (0, typeorm_1.Column)({ "type": "int", nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], registroEntity.prototype, "totaldeTokens", void 0);
__decorate([
    (0, typeorm_1.Column)({ "type": "decimal", precision: 9, scale: 2, nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], registroEntity.prototype, "tempoDeExecucaoEmMilissegundos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => agente_entity_1.AgenteEntity, (x) => x['registroExecucao'], {
        onDelete: 'CASCADE'
    }),
    __metadata("design:type", agente_entity_1.AgenteEntity)
], registroEntity.prototype, "agente", void 0);
exports.registroEntity = registroEntity = __decorate([
    (0, typeorm_1.Entity)({ "name": "tb_registro_de_execuções" })
], registroEntity);
//# sourceMappingURL=RE.entity.js.map