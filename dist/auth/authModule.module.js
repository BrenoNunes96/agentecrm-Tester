"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const authEntity_entityt_1 = require("./Entities/authEntity.entityt");
const jwt_1 = require("@nestjs/jwt");
const secretkey_1 = require("./constans/secretkey");
const usuario_module_1 = require("../usuario/usuario.module");
const auth_controller_1 = require("./controller/auth.controller");
const bcrypt_1 = require("./bcrypt/bcrypt");
const AuthService_service_1 = require("./service/AuthService.service");
const jwtStrategy_strategy_1 = require("./strategy/jwtStrategy.strategy");
const jwtLocal_Guard_1 = require("./guard/jwtLocal.Guard");
const localGuard_guard_1 = require("./guard/localGuard.guard");
const passport_1 = require("@nestjs/passport");
const localstrategy_strategy_1 = require("./strategy/localstrategy.strategy");
let authModule = class authModule {
};
exports.authModule = authModule;
exports.authModule = authModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([authEntity_entityt_1.UsuarioLogin]), (0, common_1.forwardRef)(() => usuario_module_1.UsuarioModule), passport_1.PassportModule, jwt_1.JwtModule.register({
                signOptions: { expiresIn: "1h" },
                secret: secretkey_1.secretkey.secretkey
            })],
        controllers: [auth_controller_1.AuthController],
        providers: [bcrypt_1.Bcrypt, AuthService_service_1.AuthService, jwtStrategy_strategy_1.jwtStrategy, jwtLocal_Guard_1.jwtGuard, localGuard_guard_1.localGuard, localstrategy_strategy_1.localStrategy],
        exports: [bcrypt_1.Bcrypt]
    })
], authModule);
//# sourceMappingURL=authModule.module.js.map