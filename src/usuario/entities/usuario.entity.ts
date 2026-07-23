import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AgenteEntity } from '../../Agente/Entities/agente.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_usuarios' })
export class usuarioEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @Column({ length: 255, nullable: false })
  @ApiProperty()
  usuario!: string;

  @Column({ length: 255, nullable: false })
  @ApiProperty()
  senha!: string;
  @ApiProperty({ type: () => AgenteEntity })
  @OneToMany(() => AgenteEntity, (x) => x.usuario)
  agente!: AgenteEntity[];
  
  @Column({length:255, nullable:false})
  status!:string

}
