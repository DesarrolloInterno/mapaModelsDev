import { bonuses } from "../../../db/Entities/bonuses";

const bonusesQueries = {
    GET_ALL_BONUSES: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await bonuses.query("exec get_all_bonuses @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default bonusesQueries;