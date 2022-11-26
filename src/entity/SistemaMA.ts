import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SistemaMA {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    atualizado: string

    @Column()
    ferramenta: string

    @Column()
    objetivo: string

    @Column()
    campo: string
}
