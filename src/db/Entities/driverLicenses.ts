import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class driverLicenses extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idEmployee!: number
    @Column()
    number!: string
    @Column()
    idTypeLicense!: number
    @Column()
    licenseEffectiveDate!: string
    @Column()
    dateSeniority!: string
    @Column()
    status!: string
}