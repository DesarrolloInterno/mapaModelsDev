import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class debitNotes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    numDebitNote!: number
    @Column()
    debitNoteSeries!: string
    @Column()
    debitNoteDate!: string
    @Column()
    currency!: string
    @Column()
    exchangeRate!: string
    @Column()
    subtotal!: string
    @Column()
    IVA!: string
    @Column()
    IVApercentage!: string
    @Column()
    RET!: string
    @Column()
    RETpercentage!: string
    @Column()
    total!: string
    @Column()
    balanceDue!: string
    @Column()
    userSentDebitNote!: string
    @Column()
    isTaxes!: number
    @Column()
    idTrip!: number
    @Column()
    numTrip!: number
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
    idClient!: number
    @Column()
    client!: string
    @Column()
    clientRFC!: string
    @Column()
    clientTAXID!: string
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
    token!: string
    @Column()
    digitalStampCertificate!: string
    @Column()
    certificateKey!: string
    @Column()
    passwordDigitalStampCertificate!: string
    @Column()
    certificateNumber!: string
    @Column()
    taxStamp!: string
    @Column()
    certificateFiscalDocument!: string
    @Column()
    UUID!: string
    @Column()
    statusUUID!: string
    @Column()
    CFDStamp!: string
    @Column()
    SATcertificateNumber!: string
    @Column()
    SATStamp!: string
    @Column()
    dateCFDI!: string
    @Column()
    codStatus!: string
    @Column()
    satSeal!: string
    @Column()
    CFDIstamp!: string
    @Column()
    originalChain!: string
    @Column()
    userCFDI!: string
    @Column()
    LinkQR!: string
    @Column()
    docXml!: string
    @Column()
    xmlText!: string
    @Column()
    docPdf!: string
    @Column()
    cancelationCode!: string
    @Column()
    cancellationDescriptionCode!: string
    @Column()
    cancellationReasons!: string
    @Column()
    idCancelationCode!: number
    @Column()
    tokenCancel!: string
    @Column()
    acuseText!: string
    @Column()
    acuse!: string
    @Column()
    dateCancelCFDI!: string
    @Column()
    userCancelCFDI!: string
    @Column()
    statusCancelCFDI!: string
    @Column()
    status!: string
}