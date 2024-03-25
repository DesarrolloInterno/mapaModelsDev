import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class boothRoutes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    idState!: number
    @Column()
    idTown!: number
    @Column()
    town!: string
    @Column()
    status!: string
}