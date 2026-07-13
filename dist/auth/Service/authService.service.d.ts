import { usuarioService } from "../../usuario/services/usuario.service";
import { UsuarioLogin } from "../entities/usuarioLogin.entities";
import { Bcrypt } from "../bcrypt/bcrypt";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly usuarioService;
    private readonly bcrypt;
    private readonly jwt;
    constructor(usuarioService: usuarioService, bcrypt: Bcrypt, jwt: JwtService);
    validarUser(usuario: string, senha: string): Promise<UsuarioLogin>;
    login(x: UsuarioLogin): Promise<any>;
}
