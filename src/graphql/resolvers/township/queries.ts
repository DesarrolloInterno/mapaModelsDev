import { township } from "../../../db/Entities/township";

const townshipQueries = {
        GET_ALL_TOWNSHIP: async (_: any, {}: any) => {
        try{
            const result = await township.query("exec get_all_townshi ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_ALL_TOWNSHIP_WITH_STATE: async (_: any, {}: any) => {
        try{
            const result = await township.query("exec get_all_township_with_state ");
            return result;

        } catch (error) {
            console.log(error);
        }

    }

};

export default townshipQueries;