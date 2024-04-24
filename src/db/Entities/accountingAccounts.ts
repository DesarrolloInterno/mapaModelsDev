import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class accountingAccounts extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    accountingAccount!: string
    @Column()
    nameAccountingAccount!: string
    @Column()
    idParentAccountingAccount!: string
    @Column()
    parentAccountingAccount!: string
    @Column()
    nameParentAccountingAccount!: string
    @Column()
    idCodeNameGrouper!: string
    @Column()
    codeNameGrouper!: string
    @Column()
    codeGrouper!: string
    @Column()
    accountLevel!: string
    @Column()
    accountType!: string
    @Column()
    currency!: string
    @Column()
    costs!: string
    @Column()
    accountSubtype!: string
    @Column()
    accountNature!: string
    @Column()
    isAffectable!: string
    @Column()
    showOnCancellation!: string
}