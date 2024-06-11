import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class clientTravelOrder extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idClient!: number
    @Column()
    name!: string
    @Column()
    shipmentDate!: string
    @Column()
    bussinesName!: string
    @Column()
    fullAddress!: string
    @Column()
    RFC!: string
    @Column()
	TAXID!: string
    @Column()
	idOriginAddres!: number
    @Column()
	addressOrigin!: string
    @Column()
	outsideAddressNumberOrigin!: string
    @Column()
	insideAddressNumberOrigin!: string
    @Column()
	neighborhoodOrigin!: string
    @Column()
	zipCodeOrigin!: string
    @Column()
	idCountryOrigin!: number
    @Column()
	countryOrigin!: string
    @Column()
	idStateOrigin!: number
    @Column()
	idTownOrigin!: number
    @Column()
	townOrigin!: string
    @Column()
	idDestinationAddres!: number
    @Column()
	addressDestination!: string
    @Column()
	outsideAddressNumberDestination!: string
    @Column()
	insideAddressNumberDestination!: string
    @Column()
	neighborhoodDestination!: string
    @Column()
	zipCodeDestination!: string
    @Column()
	idCountryDestination!: number
    @Column()
	countryDestination!: string
    @Column()
	idStateDestination!: number
    @Column()
	idTownDestination!: number
    @Column()
	townDestination!: string
    @Column()
	subtotal!: number
    @Column()
	IVA!: number
    @Column()
	RET!: number
    @Column()
	total!: number
    @Column()
	loadingInstructions!: string
    @Column()
	unloadingInstructions!: string
    @Column()
	status!: string
    @Column()
	stateOrigin!: string
    @Column()
	stateDestination!: string
}