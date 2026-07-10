import { InjectRepository } from "@nestjs/typeorm";
import { AgenteEntity } from "../Entities/agente.entity";
import { Any, ILike, Index, Repository } from "typeorm";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class AgenteService{

    constructor(@InjectRepository(AgenteEntity)    private readonly agente:Repository<AgenteEntity> ){ }


async Create (x:AgenteEntity):Promise<AgenteEntity>{
let  name = await this.findByName(x.NomeAgente)
  if(name){throw new HttpException("agente ja existente com mesmo nome",HttpStatus.BAD_REQUEST)}
return await this.agente.save(x)
 
}

async Findall():Promise<AgenteEntity []>{

  return await this.agente.find({relations:{registroExecucao:true}})  
}


async findByName(NomeAgente:string):Promise<AgenteEntity | null>{
  
     
  if(!NomeAgente){ throw new HttpException("não foi possivel achar o nome do agente",HttpStatus.NOT_FOUND)}

    return this.agente.findOne({where:{NomeAgente:ILike(`%${NomeAgente}%`)},relations:{registroExecucao:true}})
}



async findById(id:number):Promise<AgenteEntity | null>{

return await this.agente.findOne({where:{id},relations:{registroExecucao:true}})


}


async Updated(x:AgenteEntity):Promise<AgenteEntity>{

    await this.findById(x.id) // verifica se existe o agente pelo id

  let nomeAgente = await this.findByName(x['NomeAgente']) // verifica agente por nome 

  if(nomeAgente && nomeAgente.id !== x.id ){ throw new HttpException("não pode repetir o nome do agente !", HttpStatus.BAD_REQUEST)}
     return this.agente.save(x)

} 



async Delete(id:number):Promise<DeleteResult>{
return await this.agente.delete(id)

}



async mediaTokens():Promise<any>{
  let agenteFinal:Array<any> =[]  // array de objetos ordenado com nome do agente e media
  let registroExecucao:Array<any> = []        //MEDIA DE CADA AGENTE SOMAR CADA TOTAL DE TOKEN DE CADA EXECUCAO E COLOCAR NUMA LSITA EM ORDEM CRESCENTE
let agente = await this.Findall()    // procurar todos os agentes
let accAcum :Array<any>= []

for(let x of agente){  // procura agente
 

registroExecucao.push({[x.id]:x.registroExecucao})  // coloca o registroExecucao do agente + mais o id dele


}
let i :Array<any>= []
console.log(registroExecucao)
for(let x of registroExecucao){    // entra no array registroexecucao

let indice = Object.keys(x)[0]
for (let y of x[indice]){             //  entra no registro apartir do indice 3,5,7

i.push({[indice]: y['totaldeTokens']  })        // junto no array 'i' indice de cada objeto com chave totaldetokens

}

}
console.log(i)

let MediaTokenReduce = i.reduce((acc,item)=>{ // reduce faz laço entra em cada um por vez
  if(!acc[Object.keys(item)[0]]){
    acc[Object.keys(item)[0]]= {somando:0,contando:0,media:0} // cada indice do objetos declarados dessa forma

  }
  let indice = Object.keys(item)[0] 
  console.log(indice)

  acc[indice].somando += item[indice] //entra no value do indice
  acc[indice].contando += 1
  acc[indice].media = acc[indice].somando / acc[indice].contando
return acc
},{})
let arrayMediRe :Array<any>= [MediaTokenReduce]
console.log(arrayMediRe)
let arrayMediR2e :Array<any>= []

for(let x of agente){
for(let y of arrayMediRe){

  for(let i in y ){
    if(Number(i)=== x.id){    
arrayMediR2e.push({nome:x.NomeAgente,media:y[i].media})   // Entra no valor de cada indice y[i] e a chave fica o nome do agente

    }}
  }
}

let x = arrayMediR2e.sort((a,b)=>a.media - b.media )
console.log(x)

return x
}}