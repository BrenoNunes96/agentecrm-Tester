import { registroEntity } from './../entities/RE.entity';
import { Repository } from 'typeorm';
import { AgenteService } from '../../Agente/Service/agente.service';
import { DeleteResult } from 'typeorm/browser';
export declare class registroService {
    private readonly registroEntity;
    private readonly agenteService;
    private dataAtual;
    constructor(registroEntity: Repository<registroEntity>, agenteService: AgenteService);
    consultar(x: registroEntity): Promise<any>;
    dataPegar(): Promise<any>;
    delete(x: number): Promise<DeleteResult>;
    create(x: registroEntity): Promise<registroEntity | undefined>;
}
