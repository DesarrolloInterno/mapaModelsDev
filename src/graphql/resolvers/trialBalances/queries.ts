import { trialBalances } from "../../../db/Entities/trialBalances";

const trialBalancesQueries = {

    GET_ALL_TRIAL_BALANCES: async (_: any, {accountingAccount1, accountingAccount2, date1, date2, idEnterprise}: any) => {
        try{
            const result = await trialBalances.query("exec get_all_trialBalances @accountingAccount1 = '"+ accountingAccount1 +"', @accountingAccount2 = '"+ accountingAccount2 +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default trialBalancesQueries;