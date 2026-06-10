"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const secret_1 = require("../constants/secret");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret_1.secretkey.secret
        });
    }
    async validate(payload) {
        return payload;
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwtStrategy.strategy.js.map