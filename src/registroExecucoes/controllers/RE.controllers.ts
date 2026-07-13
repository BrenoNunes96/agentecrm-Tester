import { Body, Controller, Post, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { registroEntity } from '../entities/RE.entity';
import { registroService } from '../Service/RE.service';

import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { jwtGuard } from '../../auth/guards/jwtGuard.guard';

  @ApiBearerAuth()
@ApiTags('registroExecução')
@Controller('/registroExecucao')
export class registroController {
  constructor(private readonly registroService: registroService) {}
  
  @UseGuards(jwtGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('/registrar')
  async create(@Body() x: any): Promise< registroEntity | undefined> {
    return await this.registroService.create(x);
  }
}
