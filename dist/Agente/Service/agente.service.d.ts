import { AgenteEntity } from "../Entities/agente.entity";
import { Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
export declare class AgenteService {
    private readonly agente;
    constructor(agente: Repository<AgenteEntity>);
    Create(x: AgenteEntity): Promise<AgenteEntity>;
    Findall(): Promise<AgenteEntity[]>;
    findByName(NomeAgente: string): Promise<AgenteEntity | null>;
    findById(id: number): Promise<AgenteEntity | null>;
    Updated(x: AgenteEntity): Promise<AgenteEntity>;
    Delete(id: number): Promise<DeleteResult>;
    mediaTokens(): Promise<any>;
}
