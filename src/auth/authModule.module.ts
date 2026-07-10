import { forwardRef, Module } from "@nestjs/common";
import { UsuarioModule } from "../usuario/usuario.module";

import { PassportModule } from "@nestjs/passport";
import { JwtModule} from "@nestjs/jwt";
import { secretkey } from "./constants/secret";
import { AuthController } from "./controllers/auth.controller";
import { Bcrypt } from "./bcrypt/bcrypt";
import { AuthService } from "./Service/authService.service";
import { LocalGuard } from "./guards/localGuard.guard";
import { LocalStrategy } from "./strategy/LocalStrategy.strategy";
import { JwtStrategy } from "./strategy/jwtStrategy.strategy";
import { jwtGuard } from "./guards/jwtGuard.guard";

@Module({
imports:[ forwardRef(()=>UsuarioModule),PassportModule,JwtModule.register({
    signOptions:{expiresIn:"1h"},
    secret:secretkey.secret

})],
controllers:[AuthController],
providers:[Bcrypt,AuthService,jwtGuard,LocalGuard,LocalStrategy,JwtStrategy],
exports:[Bcrypt,AuthService]
})
export class AuthModule{}