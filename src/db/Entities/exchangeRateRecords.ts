import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class exchangeRateRecords extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    dateRate!: string
    @Column()
    exchangeRateDOF!: string
    @Column()
    exchangeRateSystem!: string
    @Column()
    status!: string
}