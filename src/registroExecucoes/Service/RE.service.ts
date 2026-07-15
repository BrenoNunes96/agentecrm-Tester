import { InjectRepository } from '@nestjs/typeorm';
import { registroEntity } from '../entities/RE.entity';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { AgenteService } from '../../Agente/Service/agente.service';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

export class registroService {
  constructor(
    @InjectRepository(registroEntity)
    private readonly registroEntity: Repository<registroEntity>,
    private readonly agenteService: AgenteService
  ) {}

  async consultar(x: registroEntity): Promise<any> {
      console.log(process.env.CO_API_KEY)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
    const { CohereClientV2 } = require('cohere-ai');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const cohere = new CohereClientV2({
    
      token:process.env.CO_API_KEY
    });
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const response: object = await cohere.chat({
        model: 'command-a-plus-05-2026',
        messages: [
          {
            role: 'user',
            content: x.agente.PromptPrincipal + x.mensagemDeEntrada,
          },
        ],
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async create(x: any): Promise<registroEntity | undefined> {
    const agenteBanco = await this.agenteService.findById(x.agente.id); // procura no banco Agente , numero do agente que se quer relacionar
    const inicio = performance.now();
    const ia: any = await this.consultar(x);

    const final = performance.now();

    const perfomanceTime: number = Number((final - inicio).toFixed(2));
    x.tempoDeExecucaoEmMilissegundos = perfomanceTime;
    console.log(x);
    console.log(ia);
    x.quantidadeDeTokensDeEntrada = ia.usage.billedUnits.inputTokens;
    x.quantidadeDeTokensDeSaida = ia.usage.billedUnits.outputTokens;
    x.totaldeTokens =
      x.quantidadeDeTokensDeSaida + x.quantidadeDeTokensDeEntrada; // soma total de tokens

    if (ia.message.content.length > 1) {
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

      if (agenteBanco.LimiteMaxMensal < 0) {
        // caso o limite do agente requisitado no registroexecucao esteja com limitemnesal menor que zero entao da BAD_REQUEST
        throw new HttpException('Limite excedido do ', HttpStatus.BAD_REQUEST);
      } else if (agenteBanco.LimiteMaxToken < x.totaldeTokens) {
        throw new HttpException(
          'Limite excedido de tokens do dia !',
          HttpStatus.BAD_REQUEST,
        );
      }
      await this.agenteService.Updated(agenteBanco); // atualiza o agente agora com o limitemensal atual

      return this.registroEntity.save(x);
    }
    return x
  }
}
