import { insurer } from "../../../db/Entities/insurer";

const insurerQueries = {
    GET_INSURER: async (_: any, {status}: any) => {
        try{
            const result = await insurer.query("exec get_all_insurer @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default insurerQueries;