import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientDocuments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClient!: number
    @Column()
    idPotentialClient!: number
    @Column()
    documentLink!: string
    @Column()
    status!: string

}