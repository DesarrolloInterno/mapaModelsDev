import { tripType } from "../../../db/Entities/tripType";

const tripTypeQueries = {

    GET_TRIPTYPE: async (_: any, {status}: any) => {
        try{
            const result = await tripType.query("exec get_all_tripType @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIPTYPE2: async (_: any, {status}: any) => {
        try{
            const result = await tripType.query("exec get_all_tripType2 @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },

};

export default tripTypeQueries;