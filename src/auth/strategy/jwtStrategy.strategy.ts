import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { secretkey } from "../constants/secret";

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
constructor(){
    super({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration:false,
        secretOrKey:secretkey.secret
    })

    
}

async validate(payload:any):Promise<any>{
    return payload
}

}