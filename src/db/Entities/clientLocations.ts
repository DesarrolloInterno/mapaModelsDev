import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientLocations extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    address!: string
    @Column()
    outsideAddressNumber!: string
    @Column()
    insideAddressNumber!: string
    @Column()
    neighborhood!: string
    @Column()
    zipCode!: string
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