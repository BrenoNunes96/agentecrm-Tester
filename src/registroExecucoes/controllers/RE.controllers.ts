import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { registroEntity } from "../entities/RE.entity";
import { registroService } from "../Service/RE.service";

import { ApiBearerAuth, ApiProperty, ApiTags } from "@nestjs/swagger";
import { jwtGuard } from "../../auth/guard/jwtLocal.Guard";


   @ApiTags('registroExecução') 
@Controller("/registroExecucao")
export class registroController{
constructor (private readonly registroService:registroService){}

@ApiBearerAuth()
@ApiTags("Usuario")
@UseGuards(jwtGuard)
@Post("/registrar")
async create (@Body() x:registroEntity):Promise<registroEntity | undefined>{
return await this.registroService.create(x)


}




}