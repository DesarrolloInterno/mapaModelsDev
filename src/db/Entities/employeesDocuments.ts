import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class employeesDocuments extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idEmployees!: number
    @Column()
    idDocument!: number
    @Column()
    documentLink!: string
    @Column()
    status!: string
    @Column()
    idCandidate!: number

}