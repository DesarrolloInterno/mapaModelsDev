import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class boothRoutes_tollBooths extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idBoothRoute!: number
    @Column()
    idTollBooth!: number
    @Column()
    orderTollBooths!: number
    @Column()
    status!: string
}