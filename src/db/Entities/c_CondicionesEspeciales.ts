import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_CondicionesEspeciales extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveCondicionesEspeciales!: string
    @Column()
    description!: string
    @Column()
    status!: string
}