import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientQuoteTermsAndConditions extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClientQuote!: number
    @Column()
    termsAndConditions!: string
    @Column()
    status!: string
}