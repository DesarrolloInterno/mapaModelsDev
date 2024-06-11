import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientTravelOrderSafetyEquipment extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClientTravelOrder!: number
    @Column()
    name!: string
    @Column()
    description!: string
    @Column()
    status!: string
}