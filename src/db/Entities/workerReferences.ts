import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class workerReferences extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    address!: string
    @Column()
    phone!: string
    @Column()
    relationship!: string
    @Column()
    status!: string
    @Column()
    idEmployee!: number
}