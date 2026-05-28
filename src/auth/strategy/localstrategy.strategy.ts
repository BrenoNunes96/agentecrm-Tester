import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { AuthService } from "../service/temp"
import { Injectable } from "@nestjs/common"
@Injectable()

export class localStrategy extends PassportStrategy(Strategy,'local'){
private _usernameField:string
private _passwordField:string
 constructor(private readonly authservice:AuthService){
super()
this._usernameField = 'usuario'                             
this._passwordField ='senha'
 }

async validate(usuario:string,senha:string):Promise<AuthService>{
return this.authservice.validarUser(usuario,senha)
}


}