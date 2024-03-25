import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class c_DocumentoAduanero extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveDocumentoAduanero!: string
    @Column()
    description!: string
    @Column()
    status!: string
}