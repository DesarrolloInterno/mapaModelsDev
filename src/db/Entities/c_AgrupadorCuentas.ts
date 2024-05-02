import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_AgrupadorCuentas extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    level!: string
    @Column()
    claveAgrupador!: string
    @Column()
    name!: string
    @Column()
    status!: string
}