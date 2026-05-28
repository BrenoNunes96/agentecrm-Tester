import { registroEntity } from "../entities/RE.entity";
import { Repository } from "typeorm";
import { AgenteService } from "../../Agente/Service/agente.service";
export declare class registroService {
    private readonly registroEntity;
    private readonly agenteService;
    constructor(registroEntity: Repository<registroEntity>, agenteService: AgenteService);
    create(x: registroEntity): Promise<registroEntity | undefined>;
}
