import { clientTravelOrderTravelPickups } from "../../../db/Entities/clientTravelOrderTravelPickups";

const clientTravelOrderTravelPickupsQueries = {
    GET_CLIENT_TRAVEL_ORDER_TRAVEL_PICKUPS: async (_: any, {idClientTravelOrder}: any) => {
        try{
            const result = await clientTravelOrderTravelPickups.query("exec get_clientTravelOrderTravelPickups_by_idClientTravelOrder @idClientTravelOrder = '"+ idClientTravelOrder +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default clientTravelOrderTravelPickupsQueries;