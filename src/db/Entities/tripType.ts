import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class tripType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    code!: string
    @Column()
    status!: string
}