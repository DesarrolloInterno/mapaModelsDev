import { accountingPeriods } from "../../../db/Entities/accountingPeriods";

const accountingPeriodsMutations = {
    CREATE_ACCOUNTING_PERIOD: async (_: any, {input}: any) => {
        const { 
            beginningDate,
            endingDate,
            numPeriod,
            fiscalYear,
            recalculate,
            postToAccounting,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            const newRecord = await accountingPeriods.query("exec create_accountingPeriods " +
            "@beginningDate = '"+beginningDate+"', " +
            "@endingDate = '"+endingDate+"', " +
            "@numPeriod = '"+numPeriod+"', " +
            "@fiscalYear = '"+fiscalYear+"', " +
            "@recalculate = '"+recalculate+"', " +
            "@postToAccounting = '"+postToAccounting+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " +
            "@idEnterprise = '"+idEnterprise+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default accountingPeriodsMutations;