import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class truckBoxInventory extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    idTruckBox! : number
    @Column()
    issueDate! : string
    @Column()
    idWarehouse! : number
    @Column()
    positioner! : string
    @Column()
    observations! : string
}