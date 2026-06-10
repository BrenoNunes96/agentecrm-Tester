import { AgenteService } from "../Service/agente.service";
import { AgenteEntity } from "../Entities/agente.entity";
import { DeleteResult } from "typeorm";
export declare class AgenteController {
    private agenteService;
    constructor(agenteService: AgenteService);
    deletar(x: number): Promise<DeleteResult>;
    created(x: AgenteEntity): Promise<AgenteEntity>;
    media(): Promise<AgenteEntity>;
    atualizar(x: AgenteEntity): Promise<AgenteEntity>;
    findAll(): Promise<AgenteEntity[]>;
}
