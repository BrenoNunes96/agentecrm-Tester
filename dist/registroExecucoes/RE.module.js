"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reModule = void 0;
const common_1 = require("@nestjs/common");
const RE_controllers_1 = require("./controllers/RE.controllers");
const RE_service_1 = require("./Service/RE.service");
const typeorm_1 = require("@nestjs/typeorm");
const RE_entity_1 = require("./entities/RE.entity");
const agente_service_1 = require("../Agente/Service/agente.service");
const agente_entity_1 = require("../Agente/Entities/agente.entity");
let reModule = class reModule {
};
exports.reModule = reModule;
exports.reModule = reModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([RE_entity_1.registroEntity, agente_entity_1.AgenteEntity])],
        providers: [RE_service_1.registroService, agente_service_1.AgenteService],
        exports: [RE_service_1.registroService, agente_service_1.AgenteService],
        controllers: [RE_controllers_1.registroController]
    })
], reModule);
//# sourceMappingURL=RE.module.js.map