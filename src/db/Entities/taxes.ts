import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class taxes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    SATcode!: string
    @Column()
    description!: string
    @Column()
    taxChargeType!: string
    @Column()
    percentage!: string
    @Column()
    taxFactor!: string
    @Column()
    status!: string
}