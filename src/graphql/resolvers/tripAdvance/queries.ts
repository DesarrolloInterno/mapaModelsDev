import { tripAdvance } from "../../../db/Entities/tripAdvance";

const tripAdvanceQueries = {
    GET_TRIPADVANCE: async (_: any, {status, date1, date2}: any) => {
        try{
            const result = await tripAdvance.query("exec get_all_tripAdvance @status = '"+ status +"', @date1 = '"+date1+"', @date2 = '"+date2+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default tripAdvanceQueries;