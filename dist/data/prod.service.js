"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdService = void 0;
const common_1 = require("@nestjs/common");
let ProdService = class ProdService {
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            url: process.env.DATABASE_URL,
            logging: false,
            dropSchema: false,
            ssl: {
                rejectUnauthorized: false
            },
            synchronize: true,
            autoLoadEntities: true
        };
    }
};
exports.ProdService = ProdService;
exports.ProdService = ProdService = __decorate([
    (0, common_1.Injectable)()
], ProdService);
//# sourceMappingURL=prod.service.js.map