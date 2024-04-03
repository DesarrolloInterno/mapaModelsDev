import {BaseEntity, Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class insurer extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    street!: string
    @Column()
    streetNumber!: string
    @Column()
    unitNumber!: string
    @Column()
    locality!: string
    @Column()
    CP!: string
    @Column()
    idCountry!: number
    @Column()
    idState!: number
    @Column()
    idTown!: number
    @Column()
    country!: string
    @Column()
    state!: string
    @Column()
    town!: string
    @Column()
    contactName!: string
    @Column()
    phone!: string
    @Column()
    email!: string
}


