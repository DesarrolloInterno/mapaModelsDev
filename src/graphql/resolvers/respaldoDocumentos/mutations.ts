import { respaldoDocumentos } from "../../../db/Entities/respaldoDocumentos";

const respaldoDocumentosMutations = {
    CREATE_RESPALDO_DOCUMENTOS_EXCEL: async (_: any, {input}: any) => {
        const { 
            claveCliente,
			nombreCliente,
			nombreDocumento,
            idEnterprise
        } = input;
        try {
            const newid = await respaldoDocumentos.query("exec create_respaldo_documentos_excel " +
                "@claveCliente = '" + claveCliente + "', " +
                "@nombreCliente = '" + nombreCliente + "', " +
                "@nombreDocumento = '"+ nombreDocumento + "', " +
                "@idEnterprise = '"+ idEnterprise + "' ");
            
            return newid;
        } catch (error) {
            console.log(error);
        }
    }
}

export default respaldoDocumentosMutations;