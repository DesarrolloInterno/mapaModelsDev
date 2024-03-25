import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_ClaveUnidadInvoicing extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveUnidad!: string
    @Column()
    name!: string
    @Column()
    description!: string
    @Column()
    note!: string
    @Column()
    symbol!: string
    @Column()
    status!: string
}