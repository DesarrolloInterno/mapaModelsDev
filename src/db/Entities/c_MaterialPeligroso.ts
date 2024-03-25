import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_MaterialPeligroso extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveMaterialPeligroso!: string
    @Column()
    description!: string
    @Column()
    class!: string
    @Column()
    secondaryDanger!: string
    @Column()
    technicalName!: string
    @Column()
    status!: string
}