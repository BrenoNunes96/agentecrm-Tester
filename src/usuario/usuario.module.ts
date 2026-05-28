import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarioEntity } from './entities/usuario.entity';
import { usuarioService } from './services/usuario.service';
import { usuarioController } from './controllers/usuario.controller';

import { Bcrypts } from '../Agente/Bcrypt/bcrypt';
import { authModule } from '../auth/authModule.module';



@Module({
  imports: [TypeOrmModule.forFeature([usuarioEntity]),forwardRef(()=>authModule)], 
  providers: [usuarioService,Bcrypts],
  controllers: [usuarioController],
  exports: [usuarioService],
})
export class UsuarioModule {}