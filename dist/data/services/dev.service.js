"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devServices = void 0;
const agente_entity_1 = require("../../Agente/Entities/agente.entity");
const RE_entity_1 = require("../../registroExecucoes/entities/RE.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const usuarioLogin_entities_1 = require("../../auth/entities/usuarioLogin.entities");
class devServices {
    createTypeOrmOptions() {
        return {
            type: "mysql",
            host: "localhost",
            port: 3306,
            password: "root",
            username: "root",
            database: "iaagente",
            synchronize: false,
            entities: [agente_entity_1.AgenteEntity, RE_entity_1.registroEntity, usuario_entity_1.usuarioEntity, usuarioLogin_entities_1.UsuarioLogin],
        };
    }
}
exports.devServices = devServices;
//# sourceMappingURL=dev.service.js.map