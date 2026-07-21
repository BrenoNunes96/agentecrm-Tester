import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { usuarioService } from '../../usuario/services/usuario.service';
import { UsuarioLogin } from '../entities/usuarioLogin.entities';
import { Bcrypt } from '../bcrypt/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => usuarioService))
    private readonly usuarioService: usuarioService,
    private readonly bcrypt: Bcrypt,
    private readonly jwt: JwtService,
  ) {}

  async validarUser(usuario: string, senha: string): Promise<UsuarioLogin> {
    const buscarusuario = await this.usuarioService.findbyname(usuario);
    if (!buscarusuario)
      throw new HttpException(
        'usuario ou senha não correspondem',
        HttpStatus.NOT_FOUND,
      );
    console.log(senha);
    const compararSenha = await this.bcrypt.compararSenha(
      senha,
      buscarusuario?.senha,
    );
    if (compararSenha)
      throw new UnauthorizedException('usuario ou senha não correspondem');

    return buscarusuario;
  }

  async login(x: UsuarioLogin): Promise<any> {
    const buscarusuario = await this.usuarioService.findbyname(x.usuario);
    const payload = { sub: buscarusuario?.usuario };
    return {
      id: buscarusuario?.id,
      usuario: buscarusuario?.usuario,
      token: `bearer ${this.jwt.sign(payload)}`,
    };
  }
}
