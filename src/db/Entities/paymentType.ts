import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class paymentType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    codePayment!: string
    @Column()
    description!: string
    @Column()
    status!: string
}