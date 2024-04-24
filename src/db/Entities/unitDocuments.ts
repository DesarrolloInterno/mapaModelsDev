import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class unitDocuments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    idUnit! : number
    @Column()
    idDocument! : number
    @Column()
    nameDocument! : string
    @Column()
    documentLink! : string
    @Column()
    status! : string
    @Column()
    typeDocument! : string
}