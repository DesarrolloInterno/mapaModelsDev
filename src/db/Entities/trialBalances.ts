import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class trialBalances extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idAccountingAccount!: number
    @Column()
    accountingAccount!: string
    @Column()
    nameAccountingAccount!: string
    @Column()
    beginningBalance!: number
    @Column()
    charges!: number
    @Column()
    payments!: number
    @Column()
    endingBalance!: number
    @Column()
    trialBalanceMonth!: string
    @Column()
    trialBalanceYear!: number
    @Column()
    status!: string
}