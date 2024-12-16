import { respaldoClientes } from "../../../db/Entities/respaldoClientes";

const respaldoClientesMutations = {
    CREATE_RESPALDOCLIENTES_EXCEL: async (_: any, {input}: any) => {
        const { 
            claveCliente,
			inicioOperaciones,
			nombreCorto,
			origenDestino,
			paraFacturacion,
			moralFisica,
			RFC,
			diasCredito,
			razonSocial,
			giroNegocio,
			razonSocialFiscal,
			primerNombre,
			apPaterno,
			apMaterno,
			segundoNombre,
			IDextranjero,
			regimenFiscal,
			capturaObligatoriaProNumber,
			capturaObligatoriaInstrucciones,
			capturaObligatoriaPOD,
			capturaObligatoriaRemision,
			limiteCredito,
			limiteVencimiento,
			versionCCP,
			calle,
			noExt,
			noInt,
			colonia,
			pais,
			estado,
			municipio,
			CP,
			localidad,
			latitud,
			longitud,
			geoCerca,
			metodoPago,
			formaPago,
			usoCFDI,
			bancoPesos,
			cuentaBancoPesos,
			claveInterbancariaPesos,
			RFCBancoPesos,
			bancoDolares,
			cuentaBancoDolares,
			claveInterbancariaDolares,
			RFCBancoDolares,
			complementoPagoDesglosarConcepto,
			ADDENDAProveedor,
			ADDENDAProceso,
			contactosFacturarContacto,
			contactosFacturarTelefono,
			contactosFacturarCelular,
			contactosFacturarNextel,
			contactosFacturarFax,
			contactosFacturarEmail,
			observaciones,
			idEnterprise
        } = input;
        try {
            const newid = await respaldoClientes.query("exec create_respaldoClientes_excel " +
				"@claveCliente = '" + claveCliente + "', " +
				"@inicioOperaciones = '" + inicioOperaciones + "', " +
				"@nombreCorto = '"+ nombreCorto + "', " +
				"@origenDestino = '"+ origenDestino + "', " +
				"@paraFacturacion = '"+ paraFacturacion + "', " +
				"@moralFisica = '"+ moralFisica + "', " +
				"@RFC = '"+ RFC + "', " +
				"@diasCredito = '"+ diasCredito + "', " +
				"@razonSocial = '"+ razonSocial + "', " +
				"@giroNegocio = '"+ giroNegocio + "', " +
				"@razonSocialFiscal = '"+ razonSocialFiscal + "', " +
				"@primerNombre = '"+ primerNombre + "', " +
				"@apPaterno = '"+ apPaterno + "', " +
				"@apMaterno = '"+ apMaterno + "', " +
				"@segundoNombre = '"+ segundoNombre + "', " +
				"@IDextranjero = '"+ IDextranjero + "', " +
				"@regimenFiscal = '"+ regimenFiscal + "', " +
				"@capturaObligatoriaProNumber = '"+ capturaObligatoriaProNumber + "', " +
				"@capturaObligatoriaInstrucciones = '"+ capturaObligatoriaInstrucciones + "', " +
				"@capturaObligatoriaPOD = '"+ capturaObligatoriaPOD + "', " +
				"@capturaObligatoriaRemision = '"+ capturaObligatoriaRemision + "', " +
				"@limiteCredito = '"+ limiteCredito + "', " +
				"@limiteVencimiento = '"+ limiteVencimiento + "', " +
				"@versionCCP = '"+ versionCCP + "', " +
				"@calle = '"+ calle + "', " +
				"@noExt = '"+ noExt + "', " +
				"@noInt = '"+ noInt + "', " +
				"@colonia = '"+ colonia + "', " +
				"@pais = '"+ pais + "', " +
				"@estado = '"+ estado + "', " +
				"@municipio = '"+ municipio + "', " +
				"@CP = '"+ CP + "', " +
				"@localidad = '"+ localidad + "', " +
				"@latitud = '"+ latitud + "', " +
				"@longitud = '"+ longitud + "', " +
				"@geoCerca = '"+ geoCerca + "', " +
				"@metodoPago = '"+ metodoPago + "', " +
				"@formaPago = '"+ formaPago + "', " +
				"@usoCFDI = '"+ usoCFDI + "', " +
				"@bancoPesos = '"+ bancoPesos + "', " +
				"@cuentaBancoPesos = '"+ cuentaBancoPesos + "', " +
				"@claveInterbancariaPesos = '"+ claveInterbancariaPesos + "', " +
				"@RFCBancoPesos = '"+ RFCBancoPesos + "', " +
				"@bancoDolares = '"+ bancoDolares + "', " +
				"@cuentaBancoDolares = '"+ cuentaBancoDolares + "', " +
				"@claveInterbancariaDolares = '"+ claveInterbancariaDolares + "', " +
				"@RFCBancoDolares = '"+ RFCBancoDolares + "', " +
				"@complementoPagoDesglosarConcepto = '"+ complementoPagoDesglosarConcepto + "', " +
				"@ADDENDAProveedor = '"+ ADDENDAProveedor + "', " +
				"@ADDENDAProceso = '"+ ADDENDAProceso + "', " +
				"@contactosFacturarContacto = '"+ contactosFacturarContacto + "', " +
				"@contactosFacturarTelefono = '"+ contactosFacturarTelefono + "', " +
				"@contactosFacturarCelular = '"+ contactosFacturarCelular + "', " +
				"@contactosFacturarNextel = '"+ contactosFacturarNextel + "', " +
				"@contactosFacturarFax = '"+ contactosFacturarFax + "', " +
				"@contactosFacturarEmail = '"+ contactosFacturarEmail + "', " +
				"@observaciones = '"+ observaciones + "', " +
				"@idEnterprise = '"+ idEnterprise +"' ");
            
            return newid;
        } catch (error) {
            console.log(error);
        }
    }
};

export default respaldoClientesMutations;