import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Injectable,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsuarioLogin } from '../entities/usuarioLogin.entities';
import { AuthService } from '../Service/authService.service';

import { LocalGuard } from '../guards/localGuard.guard';
import { ApiTags } from '@nestjs/swagger';

ApiTags("auth")
@Injectable()
@Controller('/usuario')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @UseGuards(LocalGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/logar')
  async logar(@Body() x: UsuarioLogin): Promise<any> {
    return this.authservice.login(x);
  }
}
