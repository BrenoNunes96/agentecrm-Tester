import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { usuarioService } from '../services/usuario.service';
import { usuarioEntity } from '../entities/usuario.entity';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { jwtGuard } from '../../auth/guards/jwtGuard.guard';


@ApiBearerAuth()
@ApiTags('usuarios')
@Controller('/usuario')
export class usuarioController {
  constructor(private readonly usuarioService: usuarioService) {}

  @Post('/registrar')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() x: usuarioEntity): Promise<usuarioEntity> {
    return this.usuarioService.create(x);
  }

  @UseGuards(jwtGuard)
  @Put('/atualizar')
  @HttpCode(HttpStatus.OK)
  async atualizar(@Body() x: usuarioEntity): Promise<usuarioEntity> {
    return this.usuarioService.atualizar(x);
  }

  @UseGuards(jwtGuard)
  @Get('/')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<usuarioEntity[]> {
    return this.usuarioService.findAll();
  }

  @UseGuards(jwtGuard)
  @Delete('/deletar/:id')
  async deletar(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.usuarioService.deletar(id);
  }

  @UseGuards(jwtGuard)
  @Get('/:nome')
  @HttpCode(HttpStatus.OK)
  async findByName(@Param('nome') nome: string): Promise<usuarioEntity | null> {
    // Agora o NestJS extrai o "Joao" da URL /usuario/Joao
    return this.usuarioService.findbyname(nome);
  }
}
