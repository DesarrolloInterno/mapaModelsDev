import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class bonuses extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    dateBonuses!: string
    @Column()
    amount!: number
    @Column()
    status!: string
}