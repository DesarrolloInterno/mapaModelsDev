import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class respaldoCasetas extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    nombreFormatoVenta!: string
    @Column()
    orden!: string
    @Column()
    IDRuta!: string
    @Column()
    ruta!: string
    @Column()
    origen!: string
    @Column()
    destino!: string
    @Column()
    tipo!: string
    @Column()
    idEnterprise!: string
}