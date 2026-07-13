import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgenteEntity } from './Entities/agente.entity';

import { AgenteService } from './Service/agente.service';
import { AgenteController } from './controllers/agenteController.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgenteEntity])],
  exports: [AgenteService],
  providers: [AgenteService],
  controllers: [AgenteController],
})
export class AgenteModule {}
