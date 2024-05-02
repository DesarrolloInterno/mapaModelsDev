import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class operativeClasification extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    name! : string
}