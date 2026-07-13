import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { registroEntity } from '../entities/RE.entity';
import { registroService } from '../Service/RE.service';

import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { jwtGuard } from '../../auth/guards/jwtGuard.guard';

@ApiTags('registroExecução')
@Controller('/registroExecucao')
export class registroController {
  constructor(private readonly registroService: registroService) {}

  @ApiBearerAuth()
  @UseGuards(jwtGuard)
  @Post('/registrar')
  async create(@Body() x: any): Promise< any | undefined> {
    return await this.registroService.create(x);
  }
}
