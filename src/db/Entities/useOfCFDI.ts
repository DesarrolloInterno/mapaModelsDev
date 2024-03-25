import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class useOfCFDI extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    codeUseOfCFDI!: string
    @Column()
    description!: string
    @Column()
    status!: string
}