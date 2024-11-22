import { clientDocuments } from "../../../db/Entities/clientDocuments";

const clientDocumentsQueries = {

    GET_POTENTIAL_CLIENT_DOCUMENTS: async (_: any, {idPotentialClient, idEnterprise}: any) => {
        try{
            const result = await clientDocuments.query("exec get_clientsDocuments_by_potentialClient @idPotentialClient = '"+ idPotentialClient +"', @idEnterprise = '"+ idEnterprise +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_CLIENT_DOCUMENTS_BY_IDCLIENT: async (_: any, {idClient}: any) => {
        try{
            const result = await clientDocuments.query("exec get_clientsDocuments_by_idClient @idClient = '"+ idClient +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
};

export default clientDocumentsQueries;