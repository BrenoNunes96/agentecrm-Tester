import { usuarioService } from "../services/usuario.service";
import { usuarioEntity } from "../entities/usuario.entity";
import { DeleteResult } from "typeorm";
export declare class usuarioController {
    private readonly usuarioService;
    constructor(usuarioService: usuarioService);
    create(x: usuarioEntity): Promise<usuarioEntity>;
    atualizar(x: usuarioEntity): Promise<usuarioEntity>;
    findAll(): Promise<usuarioEntity[]>;
    deletar(id: number): Promise<DeleteResult>;
    findByName(nome: string): Promise<usuarioEntity | null>;
}
