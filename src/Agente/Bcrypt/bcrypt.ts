import { Injectable } from '@nestjs/common'
import * as Bcrypt from'bcrypt'
@Injectable()
export class Bcrypts{

async CompararSenha (senha:string,senhaBanco:string):Promise<boolean>{
    return Bcrypt.compare(senha,senhaBanco)
}





async cryptografarSenha (senha:string):Promise<any>{
    return Bcrypt.hash(senha,10)
}


}