import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class positions extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idUnit!: number
    @Column()
    idTruckbox!: number
    @Column()
    idEnterprise!: number
    @Column()
    reference!: string
    @Column()
    latitude!: string
    @Column()
    longitude!: string
    @Column()
    address!: string
    @Column()
    orientation!: string
    @Column()
    speed!: string
    @Column()
    gpsDate!: string
    @Column()
    deviceType!: string
    @Column()
    odometer!: string
    @Column()
    hourometer!: string
    @Column()
    heading!: string
    @Column()
    temperature!: string
    @Column()
    rmp!: string
    @Column()
    fuel!: string
    @Column()
    ignition!: string
    @Column()
    UUID!: string
    @Column()
    tokenTransaction!: string 
    @Column()
    status!: string 
}
