import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AgenteEntity } from '../../Agente/Entities/agente.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_registro_de_execuções' })
export class registroEntity {
  @PrimaryGeneratedColumn()

  id!: number;

    @ApiProperty()
  @Column({ length: 255, nullable: false })

  mensagemDeEntrada!: string;

  @ApiProperty()
  @Column({ length: 700, nullable: false })

  mensagemDeSaida!: string;
  @ApiProperty()
  @Column({ type: 'int', nullable: false })

  quantidadeDeTokensDeEntrada!: number;
  @ApiProperty()
  @Column({ type: 'int', nullable: false })

  quantidadeDeTokensDeSaida!: number;
  @ApiProperty()
  @Column({ type: 'int', nullable: false })

  totaldeTokens!: number;
  
  @ApiProperty()
  @Column({ type: 'decimal', precision: 9, scale: 2, nullable: false })
  tempoDeExecucaoEmMilissegundos!: number;

  @ApiProperty({ type: () => registroEntity })
  @ManyToOne(() => AgenteEntity, (x) => x['registroExecucao'], {
    onDelete: 'CASCADE',
  })
  @ApiProperty()
  agente!: AgenteEntity;
}
