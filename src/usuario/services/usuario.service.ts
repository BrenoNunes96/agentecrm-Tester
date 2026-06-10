import { InjectRepository } from "@nestjs/typeorm";
import { usuarioEntity } from "../entities/usuario.entity";
import { Repository } from "typeorm";

import { HttpCode, HttpException, HttpStatus } from "@nestjs/common";


import { DeleteResult } from "typeorm/browser";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";



export class usuarioService {

constructor(  
    private bcrypt: Bcrypt,
    @InjectRepository(usuarioEntity) 
private readonly usuario:Repository<usuarioEntity> ){}



async deletar(x:number):Promise<DeleteResult>{
return this.usuario.delete(x)


}




async findbyname(usuario:string):Promise<usuarioEntity | null >{

return await this.usuario.findOne({where:{usuario}})

}

async atualizar (x:usuarioEntity):Promise<usuarioEntity>{
let  usuarios = await this.findbyname(x?.usuario)
if(usuarios && usuarios?.id !== x.id){
    throw new HttpException("ja existe usuario com o mesmo nome!",HttpStatus.BAD_REQUEST)
}
return await  this.usuario.save(x)
}


async create(x:usuarioEntity):Promise<usuarioEntity>{
    let usuarioCadastro = await this.findbyname(x.usuario)

if(usuarioCadastro){
throw new HttpException("mesmo usuario escolha outro",HttpStatus.BAD_REQUEST  )

}


        x.senha = await this.bcrypt.CryptoGrafar(x.senha)
    return await this.usuario.save(x)

}
async findAll():Promise<usuarioEntity []>{

    return this.usuario.find({ relations:{
            agente: true
          }})
   


}


}