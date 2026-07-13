import { AgenteEntity } from "../../Agente/Entities/agente.entity";
export declare class registroEntity {
    id: number;
    mensagemDeEntrada: string;
    mensagemDeSaida: string;
    quantidadeDeTokensDeEntrada: number;
    quantidadeDeTokensDeSaida: number;
    totaldeTokens: number;
    tempoDeExecucaoEmMilissegundos: number;
    agente: AgenteEntity;
}
