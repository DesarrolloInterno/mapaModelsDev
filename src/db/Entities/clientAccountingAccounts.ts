import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class clientAccountingAccounts extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClient!: string
    @Column()
    idAccountingAccount!: string
    @Column()
    accountingAccount!: string
    @Column()
    nameAccountingAccount!: string
    @Column()
    idInvoicingConcept!: string
    @Column()
    nameInvoicingConcept!: string
    @Column()
    status!: string
}