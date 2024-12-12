import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class bankDeposits extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    numBankDeposit!: number
    @Column()
    idClient!: number
    @Column()
    client!: string
    @Column()
    idBankAccount!: number
    @Column()
    bankAccount!: string
    @Column()
    exchangeRate!: number
    @Column()
    amount!: number
    @Column()
    balanceDue!: number
    @Column()
    reference!: string
    @Column()
    bankDepositDate!: string
    @Column()
    bankDepositControlDate!: string
    @Column()
    observations!: string
    @Column()
    status!: string
    @Column()
    currency!: string
    @Column()
    docPDF!: string
    @Column()
    docXML!: string
}