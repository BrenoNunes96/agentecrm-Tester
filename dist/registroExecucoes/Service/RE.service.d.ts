import { registroEntity } from "../entities/RE.entity";
import { Repository } from "typeorm";
import { AgenteService } from "../../Agente/Service/agente.service";
export declare class registroService {
    private readonly registroEntity;
    private readonly agenteService;
    constructor(registroEntity: Repository<registroEntity>, agenteService: AgenteService);
    consultar(x: registroEntity): Promise<any>;
    create(x: any): Promise<registroEntity | undefined>;
}
