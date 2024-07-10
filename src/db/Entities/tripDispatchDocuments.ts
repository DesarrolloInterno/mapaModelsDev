import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class tripDispatchDocuments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idTripOrder!: number
    @Column()
    idTrip!: number
    @Column()
    nameDocument!: string
    @Column()
    documentLink!: string
    @Column()
    status!: string
    
}