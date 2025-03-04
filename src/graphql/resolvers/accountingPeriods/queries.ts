import { accountingPeriods } from "../../../db/Entities/accountingPeriods";

const accountingPeriodsQueries = {
    GET_ALL_ACCOUNTING_PERIODS: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await accountingPeriods.query("exec get_all_accountingPeriods @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default accountingPeriodsQueries;