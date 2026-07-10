import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

import { AuthService } from "../Service2/authService.service";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy,'local'){
  private _usernameField:string
   private _passwordField:string

     constructor(private readonly authService:AuthService){
        super()
        this._passwordField ="senha",
        this._usernameField ="usuario"

     }
async validate(usuario:string,senha:string):Promise<any>{
return  this.authService.validarUser(usuario,senha)

}

}