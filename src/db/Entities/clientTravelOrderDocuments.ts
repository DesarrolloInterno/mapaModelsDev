import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientTravelOrderDocuments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    description!: string
    @Column()
    status!: string
    @Column()
    typeClient!: string
    @Column()
    idClientTravelOrder!: number
    @Column()
    idDocument!: number
    @Column()
    documentLink!: string
}