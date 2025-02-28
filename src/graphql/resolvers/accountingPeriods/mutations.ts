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
            idEnterprise,
            status
        } = input;
        try {
            const newRecord = await accountingPeriods.query("exec create_accountingPeriod " +
                "@beginningDate = '"+beginningDate+"', " +
                "@endingDate = '"+endingDate+"', " +
                "@numPeriod = '"+numPeriod+"', " +
                "@fiscalYear = '"+fiscalYear+"', " +
                "@recalculate = '"+recalculate+"', " +
                "@postToAccounting = '"+postToAccounting+"', " +
                "@userLoggedIn = '"+userLoggedIn+"', " +
                "@idEnterprise = '"+idEnterprise+"', " +
                "@status = '"+status+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_ACCOUNTING_PERIOD: async (_: any, {input}: any) => {
        const { 
            idAccountingPeriod,
            beginningDate,
            endingDate,
            numPeriod,
            fiscalYear,
            recalculate,
            postToAccounting,
            userLoggedIn,
            idEnterprise,
            status
        } = input;
        try {
            const newRecord = await accountingPeriods.query("exec update_accountingPeriod " +
                "@idAccountingPeriod = '"+idAccountingPeriod+"', " +
                "@beginningDate = '"+beginningDate+"', " +
                "@endingDate = '"+endingDate+"', " +
                "@numPeriod = '"+numPeriod+"', " +
                "@fiscalYear = '"+fiscalYear+"', " +
                "@recalculate = '"+recalculate+"', " +
                "@postToAccounting = '"+postToAccounting+"', " +
                "@userLoggedIn = '"+userLoggedIn+"', " +
                "@idEnterprise = '"+idEnterprise+"', " +
                "@status = '"+status+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_ACCOUNTING_PERIOD: async (_: any, {input}: any) => {
        const { 
            idAccountingPeriod,
            userLoggedIn
        } = input;
        try {
            await accountingPeriods.query("exec delete_accountingPeriod " +
            "@idAccountingPeriod = '"+idAccountingPeriod+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    }
};

export default accountingPeriodsMutations;