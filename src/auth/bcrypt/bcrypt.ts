
import * as bcrypt from 'bcrypt'

export class Bcrypt {


async CryptoGrafar(senha:string):Promise<any>{
return bcrypt.hash(senha,10)
}

async compararSenha(senha:string,senhaBanco:string):Promise<boolean>{
return bcrypt.compare(senha,senhaBanco)
}


}