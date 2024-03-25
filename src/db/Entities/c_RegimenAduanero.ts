import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_RegimenAduanero extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveRegimenAduanero!: string
    @Column()
    description!: string
    @Column()
    status!: string
}