import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class truckBoxLocation extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    nameLocation! : string
}