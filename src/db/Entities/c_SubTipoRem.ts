import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_SubTipoRem extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveSubTipoRem!: string
    @Column()
    name!: string
    @Column()
    status!: string
}
