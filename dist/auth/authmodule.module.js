"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const usuario_module_1 = require("../usuario/usuario.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const secret_1 = require("./constants/secret");
const auth_controller_1 = require("./controllers/auth.controller");
const bcrypt_1 = require("./bcrypt/bcrypt");
const authService_service_1 = require("./Service/authService.service");
const localGuard_guard_1 = require("./guards/localGuard.guard");
const LocalStrategy_strategy_1 = require("./strategy/LocalStrategy.strategy");
const jwtStrategy_strategy_1 = require("./strategy/jwtStrategy.strategy");
const jwtGuard_guard_1 = require("./guards/jwtGuard.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => usuario_module_1.UsuarioModule), passport_1.PassportModule, jwt_1.JwtModule.register({
                signOptions: { expiresIn: "1h" },
                secret: secret_1.secretkey.secret
            })],
        controllers: [auth_controller_1.AuthController],
        providers: [bcrypt_1.Bcrypt, authService_service_1.AuthService, jwtGuard_guard_1.jwtGuard, localGuard_guard_1.LocalGuard, LocalStrategy_strategy_1.LocalStrategy, jwtGuard_guard_1.jwtGuard, jwtStrategy_strategy_1.JwtStrategy],
        exports: [bcrypt_1.Bcrypt, authService_service_1.AuthService]
    })
], AuthModule);
//# sourceMappingURL=authmodule.module.js.map