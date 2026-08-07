export declare class Bcrypt {
    CryptoGrafar(senha: string): Promise<any>;
    compararSenha(senha: string, senhaBanco: string): Promise<boolean>;
}
