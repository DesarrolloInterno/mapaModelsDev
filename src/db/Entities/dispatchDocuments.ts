import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class dispatchDocuments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idTripOrder!: number
    @Column()
    nameDocument!: string
    @Column()
    documentLink!: string
    @Column()
    status!: string
    
}