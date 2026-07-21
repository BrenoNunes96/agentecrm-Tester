      import { registroEntity } from './../entities/RE.entity';

      import { InjectRepository } from '@nestjs/typeorm';
      import { Index, Repository } from 'typeorm';
      import { HttpException, HttpStatus } from '@nestjs/common';
      import { AgenteService } from '../../Agente/Service/agente.service';
      import { Bcrypt } from '../../auth/bcrypt/bcrypt';
      import { DeleteResult } from 'typeorm/browser';

      export class registroService {
        private dataAtual :Array<string>

        constructor(
          @InjectRepository(registroEntity)
          private readonly registroEntity: Repository<registroEntity>,
          private readonly agenteService: AgenteService
        ) {
          this.dataAtual = []
        }
        

        async consultar(x: registroEntity): Promise<any> {

          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
          const { CohereClientV2 } = require('cohere-ai');
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
          const cohere = new CohereClientV2({
          
            token:process.env.CO_API_KEY
          });
          try {
            console.log('entrou NA API COHERE')
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            const response: object = await cohere.chat({
              model: 'command-a-plus-05-2026',
              messages: [
                {
                  role: 'user',
                  content: ` encurte a responda em no maximo 6 linhas   ${x.mensagemDeEntrada}`,
                },
              ],
            });
            return response;
          } catch (error) {
          
            console.log(error);
          }
        }
      async dataPegar ():Promise<any>{
      let dat = new Date()
      let dataAtual:string = dat.toLocaleDateString('pt-BR')
      console.log(dataAtual)

      return dataAtual

      }async delete (x:number) : Promise<DeleteResult>{

        return await this.registroEntity.delete(x)
      }

        async create(x: registroEntity): Promise<registroEntity | undefined> {
        
          const inicio = performance.now();
          // chama data atual o dia 

          //RENOVAÇÃO DE TOKENS BASEADO NO DIA 
          const arrayData:Array<any> = []
          const agenteBanco = await this.agenteService.findById(x.agente.id); // procura no banco Agente , numero do agente que se quer relacionar
          const dataHoje = await this.dataPegar()
          const dataultimo = agenteBanco?.registroExecucao[0].data
           if(dataHoje !== dataultimo){
            if (agenteBanco){
              console.log("foi deletado")
              agenteBanco.LimiteMaxToken = 20000 // aumenta em 20 mil de tokens
              for(let x of agenteBanco.registroExecucao){  // entra na tabela registro do agente em especifico que estamos querendo registrar atenriormente,
                    await this.delete(x.id)          // deletar o registro atraves do id
                  
              
            }   
          }
        
        }
              if(agenteBanco){
              if(agenteBanco?.LimiteMaxToken <= 0 ){
          throw  new HttpException ("Espere 24 horas para desbloquear o chat",HttpStatus.BAD_REQUEST)
          }}

          

  
        

          const ia: any = await this.consultar(x);


          console.log(x);
          console.log(ia);
          x.quantidadeDeTokensDeEntrada = ia.usage.billedUnits.inputTokens;
          x.quantidadeDeTokensDeSaida = ia.usage.billedUnits.outputTokens;
          x.totaldeTokens = x.quantidadeDeTokensDeSaida + x.quantidadeDeTokensDeEntrada; // soma total de tokens

            x.data = dataHoje
      console.log(x.data)


          if (ia.message.content.length > 1) {          // caso o content seja mais que 1 dentro do elemento entao 
            console.log('mais de um elemento dentro do array');

            x['think'] = ia.message.content[0]['type'];
            x['thinking'] = ia.message.content[0]['thinking'];
            x.mensagemDeSaida = ia.message.content[1].text;

            console.log(ia.message.content[0]['type'] + '...');
            console.log(ia.message.content[0]['thinking']);
            console.log(x.mensagemDeSaida);
          } else {
            x.mensagemDeSaida = ia.message.content[0].text;
            console.log(ia.message.content[0]['text']);
          }

          console.log(x.totaldeTokens);

          console.log('entrou');

          if (agenteBanco?.Status === 'true') {
            // caso  seja  agente.Status ativo e caso exista o agente que se quer relacionar

            x.totaldeTokens =
              x.quantidadeDeTokensDeSaida + x.quantidadeDeTokensDeEntrada; // soma total de tokens

            agenteBanco['LimiteMaxMensal'] -=
              x.quantidadeDeTokensDeSaida + x.quantidadeDeTokensDeEntrada; // att limite deste agente

            agenteBanco.LimiteMaxToken -= x.totaldeTokens // diminui do limite o dia
            
        
            if (agenteBanco.LimiteMaxMensal <= 0) {
              // caso o limite do agente requisitado no registroexecucao esteja com limitemnesal menor que zero entao da BAD_REQUEST
              throw new HttpException('Limite excedido do ', HttpStatus.BAD_REQUEST);
            } else if (agenteBanco.LimiteMaxToken < x.totaldeTokens) {
              throw new HttpException(
                'Limite excedido de tokens do dia !',
                HttpStatus.BAD_REQUEST,
              );
            }
          
            await this.agenteService.Updated(agenteBanco); // atualiza o agente agora com o limitemensal atual e o limite do dia

          const final = performance.now();
          const perfomanceTime: number = Number((final - inicio).toFixed(2));
          x.tempoDeExecucaoEmMilissegundos = perfomanceTime;
  
            return this.registroEntity.save(x);
          }
          
        
          return x
          
        }
      }
