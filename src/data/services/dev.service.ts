import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { AgenteEntity } from "../../Agente/Entities/agente.entity";
import { registroEntity } from "../../registroExecucoes/entities/RE.entity";
import { usuarioEntity } from "../../usuario/entities/usuario.entity";
import { UsuarioLogin } from "../../auth/entities/usuarioLogin.entities";


export class devServices implements TypeOrmOptionsFactory{
createTypeOrmOptions():TypeOrmModuleOptions{

    return {
type:"mysql",
host:"localhost",
port:3306,
password:"root",
username:"root",
database:"iaagente",
synchronize:false,
entities:[AgenteEntity,registroEntity,usuarioEntity,UsuarioLogin],

    }

}

    



}