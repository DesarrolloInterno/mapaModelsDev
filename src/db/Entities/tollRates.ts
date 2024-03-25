import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class tollRates extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    idCountry!: number
    @Column()
    country!: string
    @Column()
    idState!: number
    @Column()
    state!: string
    @Column()
    idTown!: number
    @Column()
    town!: string
    @Column()
    latitude!: string
    @Column()
    longitude!: string
    @Column()
    status!: string
    
}