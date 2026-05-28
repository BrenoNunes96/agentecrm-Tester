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
exports.AgenteController = void 0;
const common_1 = require("@nestjs/common");
const agente_service_1 = require("../Service/agente.service");
const agente_entity_1 = require("../Entities/agente.entity");
const swagger_1 = require("@nestjs/swagger");
const jwtLocal_Guard_1 = require("../../auth/guard/jwtLocal.Guard");
let AgenteController = class AgenteController {
    agenteService;
    constructor(agenteService) {
        this.agenteService = agenteService;
    }
    async created(x) {
        console.log(x);
        return await this.agenteService.Create(x);
    }
    async media() {
        return await this.agenteService.mediaTokens();
    }
    async atualizar(x) {
        return await this.agenteService.Updated(x);
    }
    async findAll() {
        return await this.agenteService.Findall();
    }
};
exports.AgenteController = AgenteController;
__decorate([
    (0, common_1.Post)("/registrar"),
    (0, common_1.UseGuards)(jwtLocal_Guard_1.jwtGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agente_entity_1.AgenteEntity]),
    __metadata("design:returntype", Promise)
], AgenteController.prototype, "created", null);
__decorate([
    (0, common_1.Get)("/media"),
    (0, common_1.UseGuards)(jwtLocal_Guard_1.jwtGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgenteController.prototype, "media", null);
__decorate([
    (0, common_1.UseGuards)(jwtLocal_Guard_1.jwtGuard),
    (0, common_1.Put)("/atualizar"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agente_entity_1.AgenteEntity]),
    __metadata("design:returntype", Promise)
], AgenteController.prototype, "atualizar", null);
__decorate([
    (0, common_1.UseGuards)(jwtLocal_Guard_1.jwtGuard),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgenteController.prototype, "findAll", null);
exports.AgenteController = AgenteController = __decorate([
    (0, swagger_1.ApiTags)("agente"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("/agente"),
    __metadata("design:paramtypes", [agente_service_1.AgenteService])
], AgenteController);
//# sourceMappingURL=agenteController.controller.js.map