import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class unitType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    name! : string
}