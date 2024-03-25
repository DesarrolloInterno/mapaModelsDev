import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_SectorCOFEPRIS extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveSectorCOFEPRIS!: string
    @Column()
    description!: string
    @Column()
    status!: string
}