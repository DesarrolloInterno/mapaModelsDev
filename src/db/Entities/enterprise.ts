import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class enterprise extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    mailNotification!: string
    @Column()
    phone!: string
    @Column()
    legalForm!: string
    @Column()
    RFC!: string
    @Column()
    address!: string
    @Column()
    outsideAddressNumber!: string
    @Column()
    insideAddressNumber!: string
    @Column()
    neighborhood!: string
    @Column()
    idCountry!: number
    @Column()
    idState!: number
    @Column()
    idTown!: number
    @Column()
    zipCode!: string
    @Column()
    digitalStampCertificate!: string
    @Column()
    certificateKey!: string
    @Column()
    passwordDigitalStampCertificate!: string
    @Column()
    certificateNumber!: string
    @Column()
    enterpriseLogo!: string
    @Column()
    businessName!: string
}