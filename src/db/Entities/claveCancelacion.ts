import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class claveCancelacion extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveCancelacion!: string
    @Column()
    name!: string
    @Column()
    description!: string
}