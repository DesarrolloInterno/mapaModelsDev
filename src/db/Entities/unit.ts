import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class unit extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number
    @Column()
    economicNumber! : string
    @Column()
    idOperator! : number
    @Column()
    idUnitOwner! : number
    @Column()
    status! : string
    @Column()
    unitBrand! : string
    @Column()
    unitModel! : string
    @Column()
    typeUnit! : string
    @Column()
    unitLong! : string
    @Column()
    unitBroad! : string
    @Column()
    unitWeight! : string
    @Column()
    licensePlates! : string
    @Column()
    unitYear! : string
    @Column()
    numberAxles! : string
    @Column()
    numberTires! : string
    @Column()
    color! : string
    @Column()
    operativeClasification! : string
    @Column()
    serialNumber! : string
    @Column()
    insurancePolicy! : string
    @Column()
    engineBrand! : string
    @Column()
    engineModel! : string
    @Column()
    horsePower! : string
    @Column()
    engineSerialNumber! : string
    @Column()
    unitFrontView! : string
    @Column()
    unitRightView! : string
    @Column()
    unitBackView! : string
    @Column()
    unitLeftView! : string
    @Column()
    unitExtraView! : string
    @Column()
    carrierKey! : string
    @Column()
    permissionType! : string
    @Column()
    permissionNumber! : string
    @Column()
    environmentalInsurerPolicy! : string
    @Column()
    observations! : string
    @Column()
    idInsurer! : string
    @Column()
    idEnvironmentalInsurer! : string
}