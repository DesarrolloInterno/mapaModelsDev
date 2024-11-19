import { candidates } from "../../../db/Entities/candidates";

const candidatesQueries = {
    GET_ALL_CANDIDATES: async (_: any, {status, date1, date2, idEnterprise}: any) => {
        try{
            const result = await candidates.query("exec get_all_candidates @status = '"+ status +"', @date1 = '"+date1+"', @date2 = '"+date2+"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }

    },

};

export default candidatesQueries;