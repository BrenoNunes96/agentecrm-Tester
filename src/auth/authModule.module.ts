import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioLogin } from "./Entities/authEntity.entityt";

import { JwtModule } from "@nestjs/jwt";

import { secretkey } from "./constans/secretkey";

import { UsuarioModule } from "../usuario/usuario.module";
import { AuthController } from "./controller/auth.controller";
import { Bcrypt } from "./bcrypt/bcrypt";
import { AuthService } from "./service/AuthService.service";
import { jwtStrategy } from "./strategy/jwtStrategy.strategy";
import { jwtGuard } from "./guard/jwtLocal.Guard";
import { localGuard } from "./guard/localGuard.guard";
import { PassportModule } from "@nestjs/passport";
import { localStrategy } from "./strategy/localstrategy.strategy";

@Module({
imports:[TypeOrmModule.forFeature([UsuarioLogin]),forwardRef(()=>UsuarioModule),PassportModule,JwtModule.register({
signOptions:{expiresIn:"1h"},
secret:secretkey.secretkey
})],
controllers:[AuthController],
providers:[Bcrypt,AuthService,jwtStrategy,jwtGuard,localGuard,localStrategy],
exports:[Bcrypt]

})
export class authModule {}