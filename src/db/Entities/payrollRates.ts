import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class payrollRates extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
	typeRate!: string
    @Column()
	kilometers!: number
    @Column()
	rate!: number
    @Column()
	status!: string
    @Column()
	idEnterprise!: number
}