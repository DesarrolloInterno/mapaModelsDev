import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class respaldoDocumentos extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveCliente!: string
    @Column()
    nombreCliente!: string
    @Column()
    nombreDocumento!: string
    @Column()
    idEnterprise!: string
}