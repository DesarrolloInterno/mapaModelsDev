import { typeDocumentsClients } from "../../../db/Entities/typeDocumentsClients";

const typeDocumentsClientsQueries = {
    GET_ALL_TYPE_DOCUMENTS_CLIENTS: async (_: any, {status, typeClient, idEnterprise}: any) => {
        try{
            const result = await typeDocumentsClients.query("exec get_all_typeDocumentsClients @status = '"+ status +"', @typeClient = '"+ typeClient +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
};

export default typeDocumentsClientsQueries;