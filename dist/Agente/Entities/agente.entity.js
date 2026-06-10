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
exports.AgenteEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const RE_entity_1 = require("../../registroExecucoes/entities/RE.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const swagger_1 = require("@nestjs/swagger");
let AgenteEntity = class AgenteEntity {
    id;
    NomeAgente;
    Descricao;
    PromptPrincipal;
    LimiteMaxToken;
    LimiteMaxMensal;
    Status;
    registroExecucao;
    usuario;
};
exports.AgenteEntity = AgenteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AgenteEntity.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AgenteEntity.prototype, "NomeAgente", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AgenteEntity.prototype, "Descricao", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AgenteEntity.prototype, "PromptPrincipal", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], AgenteEntity.prototype, "LimiteMaxToken", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ nullable: false }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AgenteEntity.prototype, "LimiteMaxMensal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AgenteEntity.prototype, "Status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => usuario_entity_1.usuarioEntity }),
    (0, typeorm_1.OneToMany)(() => RE_entity_1.registroEntity, (registroEntity) => registroEntity.agente),
    __metadata("design:type", Array)
], AgenteEntity.prototype, "registroExecucao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.usuarioEntity, (x) => x.agente, {
        onDelete: 'CASCADE'
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", usuario_entity_1.usuarioEntity)
], AgenteEntity.prototype, "usuario", void 0);
exports.AgenteEntity = AgenteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_agente' })
], AgenteEntity);
//# sourceMappingURL=agente.entity.js.map