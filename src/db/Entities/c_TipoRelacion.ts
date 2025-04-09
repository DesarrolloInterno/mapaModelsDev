import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_TipoRelacion extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    clave!: string
    @Column()
    name!: string
    @Column()
    status!: string
}