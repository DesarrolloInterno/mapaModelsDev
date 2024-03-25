import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_ClaveUnidad extends BaseEntity{
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
    flag!: string
    @Column()
    status!: string
}