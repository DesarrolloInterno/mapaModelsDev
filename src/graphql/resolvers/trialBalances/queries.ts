import { trialBalances } from "../../../db/Entities/trialBalances";

const trialBalancesQueries = {

    GET_ALL_TRIAL_BALANCES: async (_: any, {accountingAccount1, accountingAccount2, date1, date2, idEnterprise}: any) => {
        try{
            const result = await trialBalances.query("exec get_all_trialBalances @accountingAccount1 = '"+ accountingAccount1 +"', @accountingAccount2 = '"+ accountingAccount2 +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ACCOUNTING_BALANCE01: async (_: any, {year, idEnterprise}: any) => {
        try{
            const result = await trialBalances.query("exec get_accounting_balance01 @year = '"+ year +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ACCOUNTING_BALANCE: async (_: any, {year, idEnterprise, firstAccount}: any) => {
        try{
            const result = await trialBalances.query("exec get_accounting_balance @year = '"+ year +"', @idEnterprise = '"+ idEnterprise +"', @firstAccount = '"+ firstAccount +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default trialBalancesQueries;