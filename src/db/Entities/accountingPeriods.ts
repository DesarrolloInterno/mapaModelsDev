import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class accountingPeriods extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    beginningDate!: string
    @Column()
    endingDate!: string
    @Column()
    numPeriod!: number
    @Column()
    fiscalYear!: number
    @Column()
    recalculate!: number
    @Column()
    postToAccounting!: number
    @Column()
    openingDate!: string
    @Column()
    closingDate!: string
    @Column()
    status!: string
    @Column()
    idEnterprise!: number
}