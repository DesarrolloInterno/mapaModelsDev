import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class truckBoxDocuments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    idTruckBox! : number
    @Column()
    idDocument! : number
    @Column()
    nameDocument! : string
    @Column()
    documentLink! : string
    @Column()
    status! : string
    @Column()
    typeDocument! : string
}