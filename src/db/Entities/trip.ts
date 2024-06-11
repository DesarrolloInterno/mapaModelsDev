import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class trip extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    idTripOrder!: number
    @Column()
    name!: string
    @Column()
    idClient!: number
    @Column()
    idOrigin!: number
    @Column()
    idDestination!: number
    @Column()
    legendOriginCollection!: string
    @Column()
    legendDestinationCollection!: string
    @Column()
    travelClassification!: string
    @Column()
    kilometres!: string
    @Column()
    travelTime!: string
    @Column()
    temperature!: string
    @Column()
    tripType!: string
    @Column()
    currencye!: string
    @Column()
    taxes!: string
    @Column()
    isRefrigerated!: number
    @Column()
    isDry!: number
    @Column()
    isDoorDoor!: number
    @Column()
    isCrossing!: number
    @Column()
    isEmpty!: number
    @Column()
    isEmptyPaid!: number
    @Column()
    idSalesFormatCrossing!: number
    @Column()
    operatorComments!: string
    @Column()
    operationComments!: string
    @Column()
    observations!: string
    @Column()
    status!: string
    @Column()
    userRecorded!: string
    @Column()
    dateRecorded!: string
    @Column()
    userModified!: string
    @Column()
    dateModified!: string
    @Column()
    userRemoved!: string
    @Column()
    dateRemoved!: string
    @Column()
    fullAddressOrigin!: string
    @Column()
    fullAddressDestination!: string
    @Column()
    americanPortion!: string
    @Column()
    crossingPortion!: string
    @Column()
    mexicanPortion!: string
    @Column()
    classifyAsCrossover!: string
    @Column()
    requestProofDelivery!: number
    @Column()
    crossingType!: string
    @Column()
    productDescription!: string
    @Column()
    currency!: string
    @Column()
    loadingDate!: string
    @Column()
    deliveryDate!: string
    @Column()
    sealNumber!: string
    @Column()
    proNumber!: string
    @Column()
    wheelChocks!: number
    @Column()
    straps!: number
    @Column()
    reference!: string
    @Column()
    orderPriority!: number
    @Column()
    orderDate!: string
    @Column()
    idSalesFormat!: number
    @Column()
    subtotal!: string
    @Column()
    IVA!: string
    @Column()
    RET!: string
    @Column()
    total!: string
    @Column()
    containers!: string
    @Column()
    shippingLines!: string
    @Column()
    numTripOrder!: number
    @Column()
    customsClearance!: string
    @Column()
    countryOrigin!: string
    @Column()
    countryDestination!: string
    @Column()
    idTripOrigin!: number
    @Column()
    typeCrossing!: string
    @Column()
    numTrip!: number
    @Column()
    idEmployee!: number
    @Column()
    idTruckBoxe!: number
    @Column()
    idUnit!: number
}