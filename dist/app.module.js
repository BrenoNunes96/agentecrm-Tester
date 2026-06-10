"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const agente_module_1 = require("./Agente/agente.module");
const RE_module_1 = require("./registroExecucoes/RE.module");
const usuario_module_1 = require("./usuario/usuario.module");
const config_1 = require("@nestjs/config");
const prod_service_1 = require("./data/services/prod.service");
const authmodule_module_1 = require("./auth/authmodule.module");
const dev_service_1 = require("./data/services/dev.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: prod_service_1.prodService,
                imports: [dev_service_1.devServices]
            }), agente_module_1.AgenteModule, usuario_module_1.UsuarioModule, authmodule_module_1.authModule, RE_module_1.reModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map