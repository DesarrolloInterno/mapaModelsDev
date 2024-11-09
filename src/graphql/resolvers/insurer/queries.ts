import { insurer } from "../../../db/Entities/insurer";

const insurerQueries = {
    GET_INSURER: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await insurer.query("exec get_all_insurer @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default insurerQueries;