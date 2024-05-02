import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_ConfigAutotransporte extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveConfigAutotransporte!: string
    @Column()
    description!: string
    @Column()
    axlesNumber!: string
    @Column()
    tireNumber!: string
    @Column()
    remolque!: string
    @Column()
    status!: string
}
