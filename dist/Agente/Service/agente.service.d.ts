import { AgenteEntity } from '../Entities/agente.entity';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { usuarioService } from '../../usuario/services/usuario.service';
import { AuthService } from '../../auth/Service/authService.service';
export declare class AgenteService {
    private readonly agente;
    private usuario;
    private authLogin;
    constructor(agente: Repository<AgenteEntity>, usuario: usuarioService, authLogin: AuthService);
    Create(x: AgenteEntity): Promise<AgenteEntity>;
    Findall(): Promise<AgenteEntity[]>;
    findByName(NomeAgente: string): Promise<AgenteEntity | null>;
    findById(id: number): Promise<AgenteEntity | null>;
    Updated(x: AgenteEntity): Promise<AgenteEntity>;
    Delete(id: number): Promise<DeleteResult>;
    mediaTokens(): Promise<any>;
}
