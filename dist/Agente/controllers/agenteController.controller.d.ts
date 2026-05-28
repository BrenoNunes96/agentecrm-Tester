import { AgenteService } from "../Service/agente.service";
import { AgenteEntity } from "../Entities/agente.entity";
export declare class AgenteController {
    private agenteService;
    constructor(agenteService: AgenteService);
    created(x: AgenteEntity): Promise<AgenteEntity>;
    media(): Promise<AgenteEntity>;
    atualizar(x: AgenteEntity): Promise<AgenteEntity>;
    findAll(): Promise<AgenteEntity[]>;
}
