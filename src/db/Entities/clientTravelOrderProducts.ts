import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientTravelOrderProducts extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClientTravelOrder!: number
    @Column()
    productName!: string
    @Column()
    productCode!: string
    @Column()
    codeUnit!: string
    @Column()
    cargoQuantity!: string
    @Column()
    cargoWeight!: string
    @Column()
    weightUnit!: string
    @Column()
    hazardousMaterial!: string
    @Column()
    codeHazardousMaterial!: string
    @Column()
    codePackaging!: string
    @Column()
    declarationNumberPart1!: string
    @Column()
    declarationNumberPart2!: string
    @Column()
    declarationNumberPart3!: string
    @Column()
    declarationNumberPart4!: string
    @Column()
    declarationNumber!: string
    @Column()
    tariffCode!: string
    @Column()
    foeringTradeUUID!: string
    @Column()
    status!: string
}