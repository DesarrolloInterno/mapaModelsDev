import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_ClaveProdServCP extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveProdServ!: string
    @Column()
    name!: string
    @Column()
    descripcion!: string
    @Column()
    dangerousMaterial!: string
    @Column()
    status!: string
}