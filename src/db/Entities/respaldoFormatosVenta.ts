import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class respaldoFormatosVenta extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    clave!: string
    @Column()
    formatoNombre!: string
    @Column()
    discriminarReporte!: string
    @Column()
    claveCliente!: string
    @Column()
    nombreCliente!: string
    @Column()
    estadoCliente!: string
    @Column()
    municipioCliente!: string
    @Column()
    RFCTAXIDCliente!: string
    @Column()
    origenClave!: string
    @Column()
    origenRFCTAXID!: string
    @Column()
    origenNombre!: string
    @Column()
    origenDireccion!: string
    @Column()
    leyendaRecoleccionOrigen!: string
    @Column()
    destinoClave!: string
    @Column()
    destinoRFCTAXID!: string
    @Column()
    destinoNombre!: string
    @Column()
    destinoDireccion!: string
    @Column()
    leyendaRecoleccionDestino!: string
    @Column()
    esViajeRedondo!: string
    @Column()
    esViajeSencillo!: string
    @Column()
    kilometros!: string
    @Column()
    duracionViaje!: string
    @Column()
    temperatura!: string
    @Column()
    tipoViaje!: string
    @Column()
    moneda!: string
    @Column()
    almacen!: string
    @Column()
    gatas!: string
    @Column()
    llevaImpuesto!: string
    @Column()
    esRefrigerado!: string
    @Column()
    esDobleOperador!: string
    @Column()
    esPistas!: string
    @Column()
    esFull!: string
    @Column()
    esTieneCruce!: string
    @Column()
    esContenedor!: string
    @Column()
    esPlataforma!: string
    @Column()
    esExcesoDimensiones!: string
    @Column()
    esHazMat!: string
    @Column()
    esClasificarComoCruce!: string
    @Column()
    esPuertaPuerta!: string
    @Column()
    esSeco!: string
    @Column()
    esVacio!: string
    @Column()
    esVacioPagado!: string
    @Column()
    formatoVentaCruce!: string
    @Column()
    porcionAmericana!: string
    @Column()
    porcionCruce!: string
    @Column()
    porcionMexicana!: string
    @Column()
    sueldoOperadorTipoPago!: string
    @Column()
    sueldoSinPuntualidad!: string
    @Column()
    sueldoConPuntualidad!: string
    @Column()
    descuentoParaPago!: string
    @Column()
    baseParaSueldo!: string
    @Column()
    requerirRecuperacionPruebasEntrega!: string
    @Column()
    estatus!: string
    @Column()
    comentarioOperador!: string
    @Column()
    comentarioOperaciones!: string
    @Column()
    comentarioObservaciones!: string
    @Column()
    idEnterprise!: number
}