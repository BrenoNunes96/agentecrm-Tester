export declare class Bcrypt {
    CompararSenha(senha: string, senhaBanco: string): Promise<boolean>;
    CryptgrafarSenha(senha: string): Promise<any>;
}
