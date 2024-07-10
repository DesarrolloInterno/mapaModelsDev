import { tripDispatchDocuments } from "../../../db/Entities/tripDispatchDocuments";

const tripDispatchDocumentsQueries = {

    GET_TRIP_DISPATCH_DOCUMENTS_BY_TRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await tripDispatchDocuments.query("exec get_trip_dispatchDocuments_by_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIP_DISPATCH_DOCUMENTS_BY_ID: async (_: any, {idDispatchDocument}: any) => {
        try{
            const result = await tripDispatchDocuments.query("exec get_tripDispatchDocument_by_id @idDispatchDocument = '"+ idDispatchDocument +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default tripDispatchDocumentsQueries;