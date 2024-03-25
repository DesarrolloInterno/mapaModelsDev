import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class client extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    businessName!: string
    @Column()
    outsideAddressNumber!: string
    @Column()
    insideAddressNumber!: string
    @Column()
    neighborhood!: string
    @Column()
    zipCode!: string
    @Column()
    idCountry!: number
    @Column()
    idTown!: number
    @Column()
    idState!: number
    @Column()
    billingReceptionPerson!: string
    @Column()
    billingReceptionPersonPhone!: string
    @Column()
    billingReceptionPersonMail!: string
    @Column()
    billingReceptionPersonStaffPosition!: string
    @Column()
    paymentReceptionPerson!: string
    @Column()
    paymentReceptionPersonPhone!: string
    @Column()
    paymentReceptionPersonMail!: string
    @Column()
    paymentReceptionPersonStaffPosition!: string
    @Column()
    chiefExecutiveOfficer!: string
    @Column()
    chiefExecutiveOfficerPhone!: string
    @Column()
    chiefExecutiveOfficerMail!: string
    @Column()
    chiefExecutiveOfficerStaffPosition!: string
    @Column()
    logisticsContactPerson!: string
    @Column()
    logisticsContactPersonPhone!: string
    @Column()
    logisticsContactPersonMail!: string
    @Column()
    logisticsContactPersonStaffPosition!: string
    @Column()
    mailReceiptInvoices!: string
    @Column()
    invoiceReceptionDays!: string
    @Column()
    sealedOrSignedWaybill!: number
    @Column()
    importRequest!: number
    @Column()
    remission!: number
    @Column()
    instructionLetter!: number
    @Column()
    idPaymentMethod!: number
    @Column()
    idUseOfCFDI!: number
    @Column()
    currency!: string
    @Column()
    idPayment!: number
    @Column()
    idFiscalSystem!: number
    @Column()
    creditDays!: string
    @Column()
    requestedCreditLimit!: number
    @Column()
    paymentSchedule!: string
    @Column()
    weeklyLoadVolume!: string   
    @Column()   
    monthlyLoadVolume!: string
    @Column()
    references1Name!: string
    @Column()
    references1Phone!: string
    @Column()
    references1Mail!: string
    @Column()
    references1CorporateNumber!: string
    @Column()
    references1CorporateName!: string
    @Column()
    references2Name!: string
    @Column()
    references2Phone!: string
    @Column()
    references2Mail!: string
    @Column()
    references2CorporateNumber!: string
    @Column()
    references2CorporateName!: string
    @Column()
    references3Name!: string
    @Column()
    references3Phone!: string
    @Column()
    references3Mail!: string
    @Column()
    references3CorporateNumber!: string
    @Column()
    references3CorporateName!: string
    @Column()
    httpAddress!: string
    @Column()
    userWebPageClient!: string
    @Column()
    passwordWebPageClient!: string
    @Column()
    status!: string
    @Column()
    TAXID!: string
    @Column()
    requestTaxpayerIdentification!: number
    @Column()
    bankStatement!: number  
    @Column()
    articlesOfIncorporation!: number
    @Column()
    formatClient!: string
    @Column()
    authorizedCreditLimit!: number
}