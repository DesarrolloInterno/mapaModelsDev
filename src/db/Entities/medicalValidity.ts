import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class medicalValidity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idEmployee!: number
    @Column()
    medicalEffectiveDate!: string
    @Column()
    docLink!: number
    @Column()
    status!: string
}