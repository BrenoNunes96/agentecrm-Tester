"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.devServices = void 0;
const common_1 = require("@nestjs/common");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const RE_entity_1 = require("../../registroExecucoes/entities/RE.entity");
const agente_entity_1 = require("../../Agente/Entities/agente.entity");
let devServices = class devServices {
    createTypeOrmOptions() {
        return {
            type: 'mysql',
            host: "localhost",
            database: "IaAgente",
            port: 3306,
            synchronize: false,
            entities: [usuario_entity_1.usuarioEntity, RE_entity_1.registroEntity, usuario_entity_1.usuarioEntity, agente_entity_1.AgenteEntity],
            username: 'root',
            password: 'root'
        };
    }
};
exports.devServices = devServices;
exports.devServices = devServices = __decorate([
    (0, common_1.Injectable)()
], devServices);
//# sourceMappingURL=dev.service.js.map