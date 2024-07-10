import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class tripTravelPickups extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClientLocation!: number
    @Column()
    idTripOrder!: number
    @Column()
    idTrip!: number
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