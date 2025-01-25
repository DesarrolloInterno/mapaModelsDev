import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class operatorReceipts extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idPreReceipt!: number
    @Column()
    numOperatorReceipt!: number
	@Column()
    dateOperatorReceipt!: string
	@Column()
    idOperator!: number
	@Column()
    operator!: string
	@Column()
    idUnit!: number
	@Column()
    unit!: string
	@Column()
    idTruckBox!: number
	@Column()
    truckBox!: string
	@Column()
    bankAccount!: string
	@Column()
    netSalary!: number
	@Column()
    advances!: number
	@Column()
    verifiedExpenses!: number
	@Column()
    discounts!: number
	@Column()
    movements!: number
	@Column()
    supplements!: number
	@Column()
    netAmountDeposit!: number
	@Column()
    status!: string
	@Column()
    idEnterprise!: number
}