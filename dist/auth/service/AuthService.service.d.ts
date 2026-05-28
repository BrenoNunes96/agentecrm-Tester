import { usuarioService } from "../../usuario/services/usuario.service";
import { Bcrypt } from "../bcrypt/bcrypt";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly usuarioServices;
    private readonly jwt;
    private bcrypt;
    constructor(usuarioServices: usuarioService, jwt: JwtService, bcrypt: Bcrypt);
    validarUser(usuario: string, senha: string): Promise<any>;
    login(usuario: string, senha: string): Promise<any>;
}
