import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class owners extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    name! : string
    @Column()
    observations! : string
    @Column()
    idCountry! : number
    @Column()
    country! : string
    @Column()
    code! : number
    @Column()
    status! : string    
}