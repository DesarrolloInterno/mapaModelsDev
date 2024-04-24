import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class clientUsers extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    userName!: string
    @Column()
    companyArea!: string
    @Column()
    description!: string
    @Column()
    password!: string
    @Column()
    status!: string
}