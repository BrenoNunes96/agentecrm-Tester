import { Module } from '@nestjs/common';
import { registroController } from './controllers/RE.controllers';
import { registroService } from './Service/RE.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { registroEntity } from './entities/RE.entity';
import { AgenteService } from '../Agente/Service/agente.service';
import { AgenteEntity } from '../Agente/Entities/agente.entity';
import { AgenteModule } from '../Agente/agente.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { AuthModule } from '../auth/authmodule.module';
import { AuthController } from '../auth/controllers/auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([registroEntity, AgenteEntity]),AgenteModule,UsuarioModule,AuthModule],
  providers: [registroService, AgenteService,AuthController],
  exports: [registroService, AgenteService],
  controllers: [registroController],
})
export class reModule {}
