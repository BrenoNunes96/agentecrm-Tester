import { Injectable } from "@nestjs/common";
import { TypeOrmDataSourceFactory, TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { usuarioEntity } from "../../usuario/entities/usuario.entity";
import { registroEntity } from "../../registroExecucoes/entities/RE.entity";
import { AgenteEntity } from "../../Agente/Entities/agente.entity";

@Injectable()
export class devServices implements TypeOrmOptionsFactory{
createTypeOrmOptions(): TypeOrmModuleOptions{
return{
    type:'mysql',
    host:"localhost",
    database:"IaAgente",
    port:3306,
    synchronize:false,
    entities:[usuarioEntity,registroEntity,usuarioEntity,AgenteEntity],
    username:'root',
    password:'root'
}

}

}