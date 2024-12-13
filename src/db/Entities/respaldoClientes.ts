import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class respaldoClientes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    claveCliente!: string
    @Column()
    inicioOperaciones!: string
    @Column()
    nombreCorto!: string
    @Column()
    origenDestino!: string
    @Column()
    paraFacturacion!: string
    @Column()
    moralFisica!: string
    @Column()
    RFC!: string
    @Column()
    diasCredito!: string
    @Column()
    razonSocial!: string
    @Column()
    giroNegocio!: string
    @Column()
    razonSocialFiscal!: string
    @Column()
    primerNombre!: string
    @Column()
    apPaterno!: string
    @Column()
    apMaterno!: string
    @Column()
    segundoNombre!: string
    @Column()
    IDextranjero!: string
    @Column()
    regimenFiscal!: string
    @Column()
    capturaObligatoriaProNumber!: string
    @Column()
    capturaObligatoriaInstrucciones!: string
    @Column()
    capturaObligatoriaPOD!: string
    @Column()
    capturaObligatoriaRemision!: string
    @Column()
    limiteCredito!: string
    @Column()
    limiteVencimiento!: string
    @Column()
    versionCCP!: string
    @Column()
    calle!: string
    @Column()
    noExt!: string
    @Column()
    noInt!: string
    @Column()
    colonia!: string
    @Column()
    pais!: string
    @Column()
    estado!: string
    @Column()
    municipio!: string
    @Column()
    CP!: string
    @Column()
    localidad!: string
    @Column()
    latitud!: string
    @Column()
    longitud!: string
    @Column()
    geoCerca!: string
    @Column()
    metodoPago!: string
    @Column()
    formaPago!: string
    @Column()
    usoCFDI!: string
    @Column()
    bancoPesos!: string
    @Column()
    cuentaBancoPesos!: string
    @Column()
    claveInterbancariaPesos!: string
    @Column()
    RFCBancoPesos!: string
    @Column()
    bancoDolares!: string
    @Column()
    cuentaBancoDolares!: string
    @Column()
    claveInterbancariaDolares!: string
    @Column()
    RFCBancoDolares!: string
    @Column()
    complementoPagoDesglosarConcepto!: string
    @Column()
    ADDENDAProveedor!: string
    @Column()
    ADDENDAProceso!: string
    @Column()
    contactosFacturarContacto!: string
    @Column()
    contactosFacturarTelefono!: string
    @Column()
    contactosFacturarCelular!: string
    @Column()
    contactosFacturarNextel!: string
    @Column()
    contactosFacturarFax!: string
    @Column()
    contactosFacturarEmail!: string
    @Column()
    observaciones!: string
    @Column()
    idEnterprise!: number
}