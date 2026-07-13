import { registroEntity } from "../entities/RE.entity";
import { registroService } from "../Service/RE.service";
export declare class registroController {
    private readonly registroService;
    constructor(registroService: registroService);
    create(x: registroEntity): Promise<registroEntity | undefined>;
}
