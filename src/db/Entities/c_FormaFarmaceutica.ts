import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_FormaFarmaceutica extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveFormaFarmaceutica!: string
    @Column()
    description!: string
    @Column()
    status!: string
}