import { ApiProperty } from "@nestjs/swagger"
import { Column } from "typeorm"


export class UsuarioLogin{
    @ApiProperty()
    @Column({length:255,nullable:false})
    public usuario!:string
    @ApiProperty()
    @Column({length:255,nullable:false})
    public senha!:string
}