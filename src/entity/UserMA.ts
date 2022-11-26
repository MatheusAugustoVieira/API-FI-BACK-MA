import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserMA {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    senha: string

}
