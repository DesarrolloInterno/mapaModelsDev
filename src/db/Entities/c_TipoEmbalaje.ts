import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_TipoEmbalaje extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveMaterialPeligroso!: string
    @Column()
    description!: string
    @Column()
    status!: string
}