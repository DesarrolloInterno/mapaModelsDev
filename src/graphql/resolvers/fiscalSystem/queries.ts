import { fiscalSystem } from "../../../db/Entities/fiscalSystem";

const fiscalSystemQueries = {
 
    GET_ALL_FISCAL_SYSTEM: async (_: any, {}: any) => {
        try{
            const result = await fiscalSystem.query("exec get_all_fiscalSystem ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },

};

export default fiscalSystemQueries;