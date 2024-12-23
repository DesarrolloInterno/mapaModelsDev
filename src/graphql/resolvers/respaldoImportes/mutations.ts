import { respaldoImportes } from "../../../db/Entities/respaldoImportes";

const respaldoImportesMutations = {
    CREATE_RESPALDO_IMPORTES_EXCEL: async (_: any, {input}: any) => {
        const { 
            claveFormatoVenta,
            nombreFormatoVenta,
            concepto,
            IVA,
            porcentajeIVA,
            IVARetenido,
            porcentajeIVARetenido,
            importe,
            idEnterprise
        } = input;
        try {
            const newid = await respaldoImportes.query("exec create_respaldo_importes_excel " +
                "@claveFormatoVenta = '" + claveFormatoVenta + "', " +
                "@nombreFormatoVenta = '" + nombreFormatoVenta + "', " +
                "@concepto = '"+ concepto + "', " +
                "@IVA = '"+ IVA + "', " +
                "@porcentajeIVA = '"+ porcentajeIVA + "', " +
                "@IVARetenido = '"+ IVARetenido + "', " +
                "@porcentajeIVARetenido = '"+ porcentajeIVARetenido + "', " +
                "@importe = '"+ importe + "', " +
                "@idEnterprise = '"+ idEnterprise + "' ");
            
            return newid;
        } catch (error) {
            console.log(error);
        }
    }
};

export default respaldoImportesMutations;