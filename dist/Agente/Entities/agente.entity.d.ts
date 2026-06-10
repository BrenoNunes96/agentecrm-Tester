import { registroEntity } from "../../registroExecucoes/entities/RE.entity";
import { usuarioEntity } from "../../usuario/entities/usuario.entity";
export declare class AgenteEntity {
    id: number;
    NomeAgente: string;
    Descricao: string;
    PromptPrincipal: string;
    LimiteMaxToken: number;
    LimiteMaxMensal: number;
    Status: string;
    registroExecucao: registroEntity[];
    usuario: usuarioEntity;
}
