import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class creditNotes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    numCreditNote!: number
    @Column()
    creditNoteSeries!: string
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
    americanPortion!: string
    @Column()
    canadianPortion!: string
    @Column()
    mexicanPortion!: string
    @Column()
    requestProofDelivery!: string
    @Column()
    crossingType!: string
    @Column()
    productDescription!: string
    @Column()
    loadingDate!: string
    @Column()
    deliveryDate!: string
    @Column()
    sealNumber!: string
    @Column()
    proNumber!: string
    @Column()
    wheelChocks!: string
    @Column()
    straps!: string
    @Column()
    reference!: string
    @Column()
    orderPriority!: string
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
    typeCrossing!: string
    @Column()
    idTripOrigin!: number
    @Column()
    numTripOrigin!: number
    @Column()
    status!: string
    @Column()
    creditNoteDate!: string
    @Column()
    idTripOrder!: number
    @Column()
    idClient!: number
    @Column()
    client!: string
    @Column()
    clientRFC!: string
    @Column()
    clientFiscalSystem!: string
    @Column()
    clientPaymentMethod!: string
    @Column()
    clientUseOfCFDI!: string
    @Column()
    clientPayment!: string
    @Column()
    clientAddress!: string
    @Column()
    clientOutsideAddressNumber!: string
    @Column()
    clientInsideAddressNumber!: string
    @Column()
    clientNeighborhood!: string
    @Column()
    clientZipCode!: string
    @Column()
    clientCountry!: string
    @Column()
    clientCodeCountry!: string
    @Column()
    clientTown!: string
    @Column()
    clientCodeTownship!: string
    @Column()
    clientState!: string
    @Column()
    clientCodeState!: string
    @Column()
    currency!: string
    @Column()
    exchangeRate!: string
    @Column()
    idOrigin!: number
    @Column()
    origin!: string
    @Column()
    originRFC!: string
    @Column()
    originTAXID!: string
    @Column()
    originAddress!: string
    @Column()
    originOutsideAddressNumber!: string
    @Column()
    originInsideAddressNumber!: string
    @Column()
    originNeighborhood!: string
    @Column()
    originZipCode!: string
    @Column()
    originCountry!: string
    @Column()
    originCodeCountry!: string
    @Column()
    originTown!: string
    @Column()
    originCodeTownship!: string
    @Column()
    originState!: string
    @Column()
    originCodeState!: string
    @Column()
    idDestination!: number
    @Column()
    destination!: string
    @Column()
    destinationRFC!: string
    @Column()
    destinationTAXID!: string
    @Column()
    destinationAddress!: string
    @Column()
    destinationOutsideAddressNumber!: string
    @Column()
    destinationInsideAddressNumber!: string
    @Column()
    destinationNeighborhood!: string
    @Column()
    destinationZipCode!: string
    @Column()
    destinationCountry!: string
    @Column()
    destinationCodeCountry!: string
    @Column()
    destinationTown!: string
    @Column()
    destinationCodeTownship!: string
    @Column()
    destinationState!: string
    @Column()
    destinationCodeState!: string
    @Column()
    idEnterprise!: number
    @Column()
    enterprise!: string
    @Column()
    enterpriseRFC!: string
    @Column()
    enterpriseFiscalSystem!: string
    @Column()
    enterpriseAddress!: string
    @Column()
    enterpriseOutsideAddressNumber!: string
    @Column()
    enterpriseInsideAddressNumber!: string
    @Column()
    enterpriseNeighborhood!: string
    @Column()
    enterpriseZipCode!: string
    @Column()
    enterpriseCountry!: string
    @Column()
    enterpriseCodeCountry!: string
    @Column()
    enterpriseTown!: string
    @Column()
    enterpriseCodeTownship!: string
    @Column()
    enterpriseState!: string
    @Column()
    enterpriseCodeState!: string
    @Column()
    idUnit!: number
    @Column()
    unit!: string
    @Column()
    carrierKey!: string
    @Column()
    permissionType!: string
    @Column()
    permissionNumber!: string
    @Column()
    unitWeight!: string
    @Column()
    unitLicensePlates!: string
    @Column()
    unitYear!: string
    @Column()
    idInsurer!: number
    @Column()
    insurer!: string
    @Column()
    insurancePolicy!: string
    @Column()
    idEnvironmentalInsurer!: number
    @Column()
    environmentalInsurer!: string
    @Column()
    environmentalInsurerPolicy!: string
    @Column()
    idTruckBoxe!: number
    @Column()
    truckBoxe!: string
    @Column()
    trailerTypes!: string
    @Column()
    truckBoxeLicensePlates!: string
    @Column()
    idOperator!: number
    @Column()
    operator!: string
    @Column()
    operatorRFC!: string
    @Column()
    driverLicense!: string
    @Column()
    operatorAddress!: string
    @Column()
    operatorOutsideAddressNumber!: string
    @Column()
    operatorInsideAddressNumber!: string
    @Column()
    operatorNeighborhood!: string
    @Column()
    operatorZipCode!: string
    @Column()
    operatorCountry!: string
    @Column()
    operatorCodeCountry!: string
    @Column()
    operatorTown!: string
    @Column()
    operatorCodeTownship!: string
    @Column()
    operatorState!: string
    @Column()
    operatorCodeState!: string
}