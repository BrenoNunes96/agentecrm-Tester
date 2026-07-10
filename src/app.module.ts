import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AgenteModule } from './Agente/agente.module';

import { reModule } from './registroExecucoes/RE.module';

import { UsuarioModule } from './usuario/usuario.module';


import { ConfigModule } from '@nestjs/config';

import { prodService } from './data/services/prod.service';
import { authModule } from './auth/authmodule.module';
import { devServices } from './data/services/dev.service';


@Module({
  imports:[
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
  useClass:devServices,
  imports:[devServices]
  }),AgenteModule,UsuarioModule,authModule,reModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
