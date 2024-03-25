import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class fiscalSystem extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    code!: string
    @Column()
    description!: string
    @Column()
    isFisica!: string
    @Column()
    isMoral!: string
    @Column()
    status!: string
}