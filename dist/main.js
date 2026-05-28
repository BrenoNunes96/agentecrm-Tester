"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const process_1 = __importDefault(require("process"));
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Agente de CRM")
        .addBearerAuth()
        .setVersion("1.0")
        .setDescription("descrição de agentes de crm")
        .setContact("breno nunes", "www.agente.com.br", "brenocp3@live.com")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("swagger", app, document);
    await app.listen(process_1.default.env.PORT ?? 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map