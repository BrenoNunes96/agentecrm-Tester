import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import process from 'process';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';
import { Headers, ValidationPipe } from '@nestjs/common';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: true,
  });

  const config = new DocumentBuilder()
    .setTitle('agente de crm ia')
    .setContact(
      'Agente corp',
      'www.agente.com.br',
      'brenocp3@live.com',
    )
    .setDescription('cadastro de ias')
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

  const document = SwaggerModule.createDocument(
    app,
    config,
  );

  SwaggerModule.setup(
    'swagger',
    app,
    document,
  );

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();