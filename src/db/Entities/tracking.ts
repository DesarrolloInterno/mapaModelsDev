import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class tracking extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idTrip!: number
    @Column()
    idClient!: number
    @Column()
    idOrigin!: number
    @Column()
    idDestination!: number
    @Column()
    idUnit!: number
    @Column()
    idTruckBox!: number
    @Column()
    idOperator!: number
    @Column()
    dateType!: string
    @Column()
    observations!: string
    @Column()
    trackingDate!: string
    @Column()
    status!: string
    @Column()
    userRecorded!: string
    @Column()
    dateRecorded!: string
    @Column()
    userModified!: string
    @Column()
    dateModified!: string
    @Column()
    userRemoved!: string
    @Column()
    dateRemoved!: string
}