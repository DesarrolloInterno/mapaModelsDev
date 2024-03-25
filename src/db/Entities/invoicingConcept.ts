import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class invoicingConcept extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    SATcode!: string
    @Column()
    description!: string
    @Column()
    refrigeratedBox!: number
    @Column()
    isTaxes!: number
    @Column()
    taxRate!: string
    @Column()
    typeTrip!: string
    @Column()
    status!: string
}