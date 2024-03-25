import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_TipoMateria extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveTipoMateria!: string
    @Column()
    description!: string
    @Column()
    status!: string
}