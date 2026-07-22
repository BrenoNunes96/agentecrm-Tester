import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgenteModule } from './Agente/agente.module';

import { reModule } from './registroExecucoes/RE.module';

import { UsuarioModule } from './usuario/usuario.module';

import { ConfigModule } from '@nestjs/config';

import { prodService } from './data/services/prod.service';

import { devServices } from './data/services/dev.service';
import { AuthModule } from './auth/authmodule.module';
console.log()
@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
      useClass:prodService,
      imports: [devServices],
      
    }),
    AgenteModule,
    UsuarioModule,
    AuthModule,
    reModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
