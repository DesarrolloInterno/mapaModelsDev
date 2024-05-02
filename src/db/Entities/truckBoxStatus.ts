import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class truckBoxStatus extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    nameStatus! : string
}