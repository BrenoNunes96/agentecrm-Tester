import { Body, Controller, HttpCode, HttpStatus, Injectable, Post, UseGuards } from "@nestjs/common";

import { UsuarioLogin } from "../Entities/authEntity.entityt";
import { AuthService } from "../service/AuthService.service";


import { localGuard } from "../guard/localGuard.guard";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('autenticação')

@Controller("/usuario")

export class AuthController {

constructor( private readonly authService:AuthService){}

@UseGuards(localGuard) // vai para localstrategy
@Post("/logar")
@HttpCode(HttpStatus.OK)

async logar(@Body()usuario:string,senha:string):Promise<UsuarioLogin>{     // retorna buscarusuario de auth service que vai p localstrategy, via de mao dupla
    return this.authService.login(usuario,senha)
}

}