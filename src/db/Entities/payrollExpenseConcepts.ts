import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class payrollExpenseConcepts extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    description!: string
    @Column()
    status!: string
    @Column()
    idEnterprise!: number
}