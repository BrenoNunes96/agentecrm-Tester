import { UsuarioLogin } from "../Entities/authEntity.entityt";
import { AuthService } from "../service/AuthService.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logar(usuario: string, senha: string): Promise<UsuarioLogin>;
}
