import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class tripAdvance extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    date! : string
    @Column()
    importAdvance! : number
    @Column()
    idTrip! : number
    @Column()
    tripOrderNumber! : number
    @Column()
    idUnit! : number
    @Column()
    idEmployee! : number
    @Column()
    comments! : string
    @Column()
    status! : string
}