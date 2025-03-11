import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class vouchers extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    voucherDate!: string
    @Column()
    voucherType!: string    
	@Column()
    voucherNumber!: number
	@Column()
    description!: string
	@Column()
    status!: string
	@Column()
    idAccountingVoucher!: number 
	@Column()
    accountingVoucher!: string
	@Column()
    charges!: number
	@Column()
    payments!: number
	@Column()
    idEnterprise!: number
    @Column()
    idBeneficiary!: number
    @Column()
    beneficiaryType!: string
}