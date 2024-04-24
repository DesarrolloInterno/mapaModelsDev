import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_TipoPermiso extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveTipoPermiso!: string
    @Column()
    description!: string
    @Column()
    claveTransporte!: string
    @Column()
    status!: string
}