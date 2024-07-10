import { tripTravelPickups } from "../../../db/Entities/tripTravelPickups";

const tripTravelPickupsQueries = {
    GET_TRIP_TRAVEL_PICKUPS: async (_: any, {idTrip}: any) => {
        try{
            const result = await tripTravelPickups.query("exec get_tripTravelPickups_by_idTrip @idTrip = '"+ idTrip +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default tripTravelPickupsQueries;