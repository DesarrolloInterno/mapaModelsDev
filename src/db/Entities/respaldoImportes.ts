import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class respaldoImportes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveFormatoVenta!: string
    @Column()
    nombreFormatoVenta!: string
    @Column()
    concepto!: string
    @Column()
    IVA!: string
    @Column()
    porcentajeIVA!: string
    @Column()
    IVARetenido!: string
    @Column()
    porcentajeIVARetenido!: string
    @Column()
    importe!: string
    @Column()
    idEnterprise!: string
}