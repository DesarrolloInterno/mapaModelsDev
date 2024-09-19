import { tracking } from "../../../db/Entities/tracking";

const trackingQueries = {

    GET_ALL_TRACKING_BY_IDTRIP: async (_: any, {idTrip, dateType}: any) => {
        try{
            const result = await tracking.query("exec get_all_tracking_by_idTrip @idTrip = '"+ idTrip +"', @dateType = '"+ dateType + "' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default trackingQueries;