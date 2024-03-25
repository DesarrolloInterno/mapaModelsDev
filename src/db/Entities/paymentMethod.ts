import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class paymentMethod extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    code!: string
    @Column()
    description!: string
    @Column()
    status!: string
}