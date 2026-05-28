import { usuarioEntity } from "../entities/usuario.entity";
import { Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";
export declare class usuarioService {
    private bcrypt;
    private readonly usuario;
    constructor(bcrypt: Bcrypt, usuario: Repository<usuarioEntity>);
    deletar(x: number): Promise<DeleteResult>;
    findbyname(usuario: string): Promise<usuarioEntity | null>;
    atualizar(x: usuarioEntity): Promise<usuarioEntity>;
    create(x: usuarioEntity): Promise<usuarioEntity>;
    findAll(): Promise<usuarioEntity[]>;
}
