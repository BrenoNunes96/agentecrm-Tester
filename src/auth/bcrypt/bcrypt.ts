
import * as bcrypt from 'bcrypt'
export class Bcrypt {


    async CompararSenha(senha:string,senhaBanco:string):Promise<boolean>{
  return bcrypt.compare(senha,senhaBanco)

    }
    async CryptgrafarSenha(senha:string):Promise<any>{
return bcrypt.hash(senha,10)

    }



}