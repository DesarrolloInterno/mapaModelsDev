import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class truckBoxType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    nameType! : string
}