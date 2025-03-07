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
    GET_ALL_ACCOUNTING_PERIODS_BY_FISCALYEAR: async (_: any, {fiscalYear, idEnterprise}: any) => {
        try{
            const result = await accountingPeriods.query("exec get_all_accountingPeriods_by_fiscalYear @fiscalYear = '"+ fiscalYear +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default accountingPeriodsQueries;