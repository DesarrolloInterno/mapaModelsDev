import { clientTravelOrderDocuments } from "../../../db/Entities/clientTravelOrderDocuments";

const clientTravelOrderDocumentsQueries = {
    GET_CLIENTTRAVELORDER_DOCUMENTS: async (_: any, {idClientTravelOrder, status}: any) => {
        try{
            const result = await clientTravelOrderDocuments.query("exec get_clientTravelOrderDocuments @idClientTravelOrder = '"+ idClientTravelOrder +"', @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
};

export default clientTravelOrderDocumentsQueries;