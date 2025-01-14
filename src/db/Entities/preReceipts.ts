import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class preReceipts extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    numReceipt!: number
    @Column()
    idOperator!: number
    @Column()
    operator!: string
    @Column()
    trips!: string
    @Column()
    dateReceipt!: string
    @Column()
    status!: string
    @Column()
    idEnterprise!: number
}