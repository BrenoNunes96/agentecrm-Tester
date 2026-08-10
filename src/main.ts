  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';
  import process from 'process';
  import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
  import { ValidationPipe } from '@nestjs/common';
  import 'dotenv/config';
  import { ConfigModule } from '@nestjs/config';
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    app.useGlobalPipes(new ValidationPipe());
    const config = new DocumentBuilder()
      .setTitle('agente de crm ia')
      .setContact('Agente corp', 'www.agente.com.br', 'brenocp3@live.com')
      .setDescription('cadastro de ias ')
      .setVersion('1.0')
      .addBearerAuth()
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-api-key',
        in: 'header',
      },
      'api-key',
    )
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('swagger', app, document,{
swaggerOptions:{
   requestInterceptor: (request: any) => {
        request.headers['x-api-key'] = process.env.API_KEY;

        return request
}
}


    });
    app.enableCors({
      origin: true,
    });
    ConfigModule.forRoot({
      isGlobal:true
    })

    await app.listen(process.env.PORT ?? 4000);
  }
  bootstrap();
