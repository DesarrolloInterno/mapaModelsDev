import { truckBoxDocuments } from "../../../db/Entities/truckBoxDocuments";

const truckBoxDocumentsQueries = {
    GET_ALL_TRUCKBOX_DOCUMENTS: async (_: any, {idTruckBox}: any) => {
        try{
            const result = await truckBoxDocuments.query("exec get_truckBoxDocuments @idTruckBox = '"+ idTruckBox +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default truckBoxDocumentsQueries;