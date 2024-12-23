import { respaldoFormatosVenta } from "../../../db/Entities/respaldoFormatosVenta";

const respaldoFormatosVentaMutations = {
    CREATE_RESPALDO_FORMATOS_VENTA_EXCEL: async (_: any, {input}: any) => {
        const { 
            clave,
            formatoNombre,
            discriminarReporte,
            claveCliente,
            nombreCliente,
            estadoCliente,
            municipioCliente,
            RFCTAXIDCliente,
            origenClave,
            origenRFCTAXID,
            origenNombre,
            origenDireccion,
            leyendaRecoleccionOrigen,
            destinoClave,
            destinoRFCTAXID,
            destinoNombre,
            destinoDireccion,
            leyendaRecoleccionDestino,
            esViajeRedondo,
            esViajeSencillo,
            kilometros,
            duracionViaje,
            temperatura,
            tipoViaje,
            moneda,
            almacen,
            gatas,
            llevaImpuesto,
            esRefrigerado,
            esDobleOperador,
            esPistas,
            esFull,
            esTieneCruce,
            esContenedor,
            esPlataforma,
            esExcesoDimensiones,
            esHazMat,
            esClasificarComoCruce,
            esPuertaPuerta,
            esSeco,
            esVacio,
            esVacioPagado,
            formatoVentaCruce,
            porcionAmericana,
            porcionCruce,
            porcionMexicana,
            sueldoOperadorTipoPago,
            sueldoSinPuntualidad,
            sueldoConPuntualidad,
            descuentoParaPago,
            baseParaSueldo,
            requerirRecuperacionPruebasEntrega,
            estatus,
            comentarioOperador,
            comentarioOperaciones,
            comentarioObservaciones,
            idEnterprise
        } = input;
        try {
            const newid = await respaldoFormatosVenta.query("exec create_respaldo_formatosVenta_excel " +
                "@clave = '" + clave + "', " +
                "@formatoNombre = '" + formatoNombre + "', " +
                "@discriminarReporte = '"+ discriminarReporte + "', " +
                "@claveCliente = '"+ claveCliente + "', " +
                "@nombreCliente = '"+ nombreCliente + "', " +
                "@estadoCliente = '"+ estadoCliente + "', " +
                "@municipioCliente = '"+ municipioCliente + "', " +
                "@RFCTAXIDCliente = '"+ RFCTAXIDCliente + "', " +
                "@origenClave = '"+ origenClave + "', " +
                "@origenRFCTAXID = '"+ origenRFCTAXID + "', " +
                "@origenNombre = '"+ origenNombre + "', " +
                "@origenDireccion = '"+ origenDireccion + "', " +
                "@leyendaRecoleccionOrigen = '"+ leyendaRecoleccionOrigen + "', " +
                "@destinoClave = '"+ destinoClave + "', " +
                "@destinoRFCTAXID = '"+ destinoRFCTAXID + "', " +
                "@destinoNombre = '"+ destinoNombre + "', " +
                "@destinoDireccion = '"+ destinoDireccion + "', " +
                "@leyendaRecoleccionDestino = '"+ leyendaRecoleccionDestino + "', " +
                "@esViajeRedondo = '"+ esViajeRedondo + "', " +
                "@esViajeSencillo = '"+ esViajeSencillo + "', " +
                "@kilometros = '"+ kilometros + "', " +
                "@duracionViaje = '"+ duracionViaje + "', " +
                "@temperatura = '"+ temperatura + "', " +
                "@tipoViaje = '"+ tipoViaje + "', " +
                "@moneda = '"+ moneda + "', " +
                "@almacen = '"+ almacen + "', " +
                "@gatas = '"+ gatas + "', " +
                "@llevaImpuesto = '"+ llevaImpuesto + "', " +
                "@esRefrigerado = '"+ esRefrigerado + "', " +
                "@esDobleOperador = '"+ esDobleOperador + "', " +
                "@esPistas = '"+ esPistas + "', " +
                "@esFull = '"+ esFull + "', " +
                "@esTieneCruce = '"+ esTieneCruce + "', " +
                "@esContenedor = '"+ esContenedor + "', " +
                "@esPlataforma = '"+ esPlataforma + "', " +
                "@esExcesoDimensiones = '"+ esExcesoDimensiones + "', " +
                "@esHazMat = '"+ esHazMat + "', " +
                "@esClasificarComoCruce = '"+ esClasificarComoCruce + "', " +
                "@esPuertaPuerta = '"+ esPuertaPuerta + "', " +
                "@esSeco = '"+ esSeco + "', " +
                "@esVacio = '"+ esVacio + "', " +
                "@esVacioPagado = '"+ esVacioPagado + "', " +
                "@formatoVentaCruce = '"+ formatoVentaCruce + "', " +
                "@porcionAmericana = '"+ porcionAmericana + "', " +
                "@porcionCruce = '"+ porcionCruce + "', " +
                "@porcionMexicana = '"+ porcionMexicana + "', " +
                "@sueldoOperadorTipoPago = '"+ sueldoOperadorTipoPago + "', " +
                "@sueldoSinPuntualidad = '"+ sueldoSinPuntualidad + "', " +
                "@sueldoConPuntualidad = '"+ sueldoConPuntualidad + "', " +
                "@descuentoParaPago = '"+ descuentoParaPago + "', " +
                "@baseParaSueldo = '"+ baseParaSueldo + "', " +
                "@requerirRecuperacionPruebasEntrega = '"+ requerirRecuperacionPruebasEntrega + "', " +
                "@estatus = '"+ estatus + "', " +
                "@comentarioOperador = '"+ comentarioOperador + "', " +
                "@comentarioOperaciones = '"+ comentarioOperaciones + "', " +
                "@comentarioObservaciones = '"+ comentarioObservaciones + "', " +
                "@idEnterprise = '"+ idEnterprise +"' ");
            
            return newid;
        } catch (error) {
            console.log(error);
        }
    }
};

export default respaldoFormatosVentaMutations;