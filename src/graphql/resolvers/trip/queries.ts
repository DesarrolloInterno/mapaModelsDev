import { trip } from "../../../db/Entities/trip";

const tripQueries = {

    GET_ALL_TRIPFORCROSSING: async (_: any, {date1, date2}: any) => {
        try{
            const result = await trip.query("exec get_all_tripsForCrossings @date1 = '"+ date1 +"', @date2 = '"+ date2 +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default tripQueries;