import { Body, Controller, Post, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { registroEntity } from '../entities/RE.entity';
import { registroService } from '../Service/RE.service';

import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { jwtGuard } from '../../auth/guards/jwtGuard.guard';
@ApiTags('registroexecução')
@ApiBearerAuth()
@Controller('/registroExecucao')
export class registroController {
  constructor(private readonly registroService: registroService) {}

  @Post('/registrar')
  @UseGuards(jwtGuard)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() x: registroEntity): Promise< registroEntity | undefined> {
    return await this.registroService.create(x);
  
  }

  
}
