import { Injectable } from "@nestjs/common";
import { TypeOrmDataSourceFactory, TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { usuarioEntity } from "../../usuario/entities/usuario.entity";
import { registroEntity } from "../../registroExecucoes/entities/RE.entity";
import { AgenteEntity } from "../../Agente/Entities/agente.entity";
import { UsuarioLogin } from "../../auth/Entities/authEntity.entityt";

@Injectable()
export class devServices implements TypeOrmOptionsFactory{

 createTypeOrmOptions():TypeOrmModuleOptions{
     return{
        type:'mysql',
        host:"localhost",
        password:'root',
        username:'root',
        database:"iaagente",
        entities:[usuarioEntity,registroEntity,UsuarioLogin,AgenteEntity],
        synchronize:false,
        autoLoadEntities:true
     }
 }
}