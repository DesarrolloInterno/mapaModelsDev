import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class truckBoxes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    idEnterprise! : number
    @Column()
    idLine! : number
    @Column()
    economicNumber! : string
    @Column()
    status! : string
    @Column()
    location! : string
    @Column()
    serialNumber! : string
    @Column()
    unitType! : string
    @Column()
    brand! : string
    @Column()
    model! : string
    @Column()
    licensePlates! : string
    @Column()
    year! : string
    @Column()
    measurement! : string
    @Column()
    odometer! : string
    @Column()
    idCountry! : number
    @Column()
    country! : string
    @Column()
    idState! : number
    @Column()
    state! : string
    @Column()
    trailerTypes! : string
}