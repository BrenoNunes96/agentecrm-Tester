import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgenteEntity } from './Entities/agente.entity';

import { AgenteService } from './Service/agente.service';
import { AgenteController } from './controllers/agenteController.controller';
import { UsuarioModule } from '../usuario/usuario.module';
import { usuarioEntity } from '../usuario/entities/usuario.entity';
import { AuthModule } from '../auth/authmodule.module';
import { AuthController } from '../auth/controllers/auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgenteEntity,usuarioEntity]),UsuarioModule,AuthModule  ],
  exports: [AgenteService],
  providers: [AgenteService,AuthController],
  controllers: [AgenteController,AuthController],
})
export class AgenteModule {}
