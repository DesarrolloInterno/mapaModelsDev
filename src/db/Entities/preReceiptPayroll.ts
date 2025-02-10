import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class preReceiptPayroll extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    numPreReceiptPayroll!: number
    @Column()
    idEmployee!: number
    @Column()
    employee!: string
    @Column()
    date!: string
    @Column()
    idUnit!: number
    @Column()
    unit!: string
    @Column()
    employeeSalary!: string
    @Column()
    salaryAdvances!: string
    @Column()
    documentedExpenses!: string
    @Column()
    payrollDeductions!: string
    @Column()
    totalEmptyTrip!: string
    @Column()
    payrollSupplements!: string
    @Column()
    status!: string
}
