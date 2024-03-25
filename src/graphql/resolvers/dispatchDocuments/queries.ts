import { dispatchDocuments } from "../../../db/Entities/dispatchDocuments";

const dispatchDocumentsQueries = {

    GET_DISPATCH_DOCUMENTS_BY_TRIPORDER: async (_: any, {idTripOrder}: any) => {
        try{
            const result = await dispatchDocuments.query("exec get_dispatchDocuments_by_idTripOrder @idTripOrder = '"+ idTripOrder +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_DISPATCH_DOCUMENTS_BY_ID: async (_: any, {idDispatchDocument}: any) => {
        try{
            const result = await dispatchDocuments.query("exec get_dispatchDocuments_by_id @idDispatchDocument = '"+ idDispatchDocument +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default dispatchDocumentsQueries;