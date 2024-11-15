import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class bankAccounts extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    nickName!: string
    @Column()
	idBank!: number
    @Column()
	bank!: string
    @Column()
	accountType!: string
    @Column()
	account!: string
    @Column()
	codeAccount!: string
    @Column()
	accountingAccount1!: string
    @Column()
	accountingAccount2!: string
    @Column()
	accountingAccount3!: string
    @Column()
	complementaryAccount!: string
    @Column()
	bankTransferAccount!: string
    @Column()
	complementaryTransferAccount!: string
    @Column()
	accountManager!: string
    @Column()
	pettyCash!: number
    @Column()
	pettyCashReimbursementAccount!: number
    @Column()
	currency!: string
    @Column()
	status!: string
}

    