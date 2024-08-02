import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientTravelOrderTravelPickups extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClientLocation!: number
    @Column()
    idClientTravelOrder!: number
    @Column()
    idRowProduc!: number
    @Column()
    kilometres!: string
    @Column()
    productQuantity!: string
    @Column()
    productWeight!: string
    @Column()
    measuringUnit!: string
    @Column()
    appointmentDate!: string
    @Column()
    status!: string
}