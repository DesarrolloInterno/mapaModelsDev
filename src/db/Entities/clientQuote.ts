import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientQuote extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idEnterprise!: number
    @Column()
    businessNameEnterprise!: string
    @Column()
    idUser!: number
    @Column()
    idEmployee!: number
    @Column()
    businessNameDestination!: string
    @Column()
    phoneDestination!: string
    @Column()
    contactPersonNameDestination!: string
    @Column()
    contactPersonMailNameDestination!: string
    @Column()
    date!: string
    @Column()
    effectiveStartDate!: string
    @Column()
    effectiveEndDate!: string
    @Column()
    status!: string
}