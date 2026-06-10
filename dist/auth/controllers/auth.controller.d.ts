import { UsuarioLogin } from "../entities/usuarioLogin.entities";
import { AuthService } from "../Service/authService.service";
export declare class AuthController {
    private readonly authservice;
    constructor(authservice: AuthService);
    logar(x: UsuarioLogin): Promise<any>;
}
