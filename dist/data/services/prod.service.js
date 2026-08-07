"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prodService = void 0;
class prodService {
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            url: process.env.DATABASE_URL,
            dropSchema: false,
            logging: false,
            ssl: {
                rejectUnauthorized: false,
            },
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}
exports.prodService = prodService;
//# sourceMappingURL=prod.service.js.map