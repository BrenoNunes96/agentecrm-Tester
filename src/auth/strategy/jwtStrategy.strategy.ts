import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { secretkey } from "../constans/secretkey";
import { Injectable } from "@nestjs/common";
@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy, 'jwt'){
constructor(){
super({
ignoreExpiration:false,
secretOrKey:secretkey.secretkey,
jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
})
}


async validate(payload:any){
    return payload
}
}