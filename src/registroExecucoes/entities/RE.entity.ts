import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AgenteEntity } from '../../Agente/Entities/agente.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_registro_de_execuções' })
export class registroEntity {
  @PrimaryGeneratedColumn()

  id!: number;

  @Column({ length: 255, nullable: false })
  @ApiProperty()
  mensagemDeEntrada!: string;

  @Column({ length: 700, nullable: false })

  mensagemDeSaida!: string;

  @Column({ type: 'int', nullable: false })
  quantidadeDeTokensDeEntrada!: number;

  @Column({ type: 'int', nullable: false })
  quantidadeDeTokensDeSaida!: number;

  @Column({ type: 'int', nullable: false })

  totaldeTokens!: number;

  @Column({ type: 'decimal', precision: 9, scale: 2, nullable: false })
  
  tempoDeExecucaoEmMilissegundos!: number;

  @ManyToOne(() => AgenteEntity, (x) => x['registroExecucao'], {
    onDelete: 'CASCADE',
  })

  agente!: AgenteEntity;
}
