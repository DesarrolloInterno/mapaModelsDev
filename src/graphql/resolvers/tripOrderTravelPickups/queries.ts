import { tripOrderTravelPickups } from "../../../db/Entities/tripOrderTravelPickups";

const tripOrderTravelPickupsQueries = {
    GET_TRIP_ORDER_TRAVEL_PICKUPS: async (_: any, {idTripOrder}: any) => {
        try{
            const result = await tripOrderTravelPickups.query("exec get_tripOrderTravelPickups_by_idTripOrder @idTripOrder = '"+ idTripOrder +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default tripOrderTravelPickupsQueries;