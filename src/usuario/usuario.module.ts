import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarioEntity } from './entities/usuario.entity';
import { usuarioService } from './services/usuario.service';
import { usuarioController } from './controllers/usuario.controller';

import { Bcrypt } from '../auth/bcrypt/bcrypt';
import { AuthModule } from '../auth/authmodule.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([usuarioEntity]),
    forwardRef(() => AuthModule),
  ],
  providers: [usuarioService, Bcrypt],
  controllers: [usuarioController],
  exports: [usuarioService],
})
export class UsuarioModule {}
