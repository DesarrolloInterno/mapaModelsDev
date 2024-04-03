import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class unitDocuments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    idUnit! : number
    @Column()
    nameDocument! : string
    @Column()
    idDocument! : number
    @Column()
    documentLink! : string
    @Column()
    status! : string
}