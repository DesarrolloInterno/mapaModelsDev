import { tracking } from "../../../db/Entities/tracking";

const trackingQueries = {

    GET_ALL_TRACKING_BY_IDTRIP: async (_: any, {idTrip}: any) => {
        try{
            const result = await tracking.query("exec get_all_tracking_by_idTrip @idTrip = '"+ idTrip +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default trackingQueries;