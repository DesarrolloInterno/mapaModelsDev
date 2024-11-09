import { accountingAccounts } from "../../../db/Entities/accountingAccounts";

const accountingAccountsMutations = {
    CREATE_ACCOUNTING_ACCOUNT: async (_: any, {input}: any) => {
        const { 
            accountingAccount,
            nameAccountingAccount,
            idParentAccountingAccount,
            parentAccountingAccount,
            nameParentAccountingAccount,
            idCodeNameGrouper,
            codeNameGrouper,
            codeGrouper,
            accountLevel,
            accountType,
            currency,
            costs,
            accountSubtype,
            accountNature,
            isAffectable,
            showOnCancellation,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            const newRecord = await accountingAccounts.query("exec create_accountingAccount " +
            "@accountingAccount = '"+accountingAccount+"', " +
            "@nameAccountingAccount = '"+nameAccountingAccount+"', " +
            "@idParentAccountingAccount = '"+idParentAccountingAccount+"', " +
            "@parentAccountingAccount = '"+parentAccountingAccount+"', " +
            "@nameParentAccountingAccount = '"+nameParentAccountingAccount+"', " +
            "@idCodeNameGrouper = '"+idCodeNameGrouper+"', " +
            "@codeNameGrouper = '"+codeNameGrouper+"', " +
            "@codeGrouper = '"+codeGrouper+"', " +
            "@accountLevel = '"+accountLevel+"', " +
            "@accountType = '"+accountType+"', " +
            "@currency = '"+currency+"', " +
            "@costs = '"+costs+"', " +
            "@accountSubtype = '"+accountSubtype+"', " +
            "@accountNature = '"+accountNature+"', " +
            "@isAffectable = '"+isAffectable+"', " +
            "@showOnCancellation = '"+showOnCancellation+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " + "@idEnterprise = '"+idEnterprise+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_ACCOUNTING_ACCOUNT: async (_: any, {input}: any) => {
        const { 
            idAccountingAccount,
            accountingAccount,
            nameAccountingAccount,
            idParentAccountingAccount,
            parentAccountingAccount,
            nameParentAccountingAccount,
            idCodeNameGrouper,
            codeNameGrouper,
            codeGrouper,
            accountLevel,
            accountType,
            currency,
            costs,
            accountSubtype,
            accountNature,
            isAffectable,
            showOnCancellation,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            const newRecord = await accountingAccounts.query("exec update_accountingAccount " +
            "@idAccountingAccount = '"+idAccountingAccount+"', " +
            "@accountingAccount = '"+accountingAccount+"', " +
            "@nameAccountingAccount = '"+nameAccountingAccount+"', " +
            "@idParentAccountingAccount = '"+idParentAccountingAccount+"', " +
            "@parentAccountingAccount = '"+parentAccountingAccount+"', " +
            "@nameParentAccountingAccount = '"+nameParentAccountingAccount+"', " +
            "@idCodeNameGrouper = '"+idCodeNameGrouper+"', " +
            "@codeNameGrouper = '"+codeNameGrouper+"', " +
            "@codeGrouper = '"+codeGrouper+"', " +
            "@accountLevel = '"+accountLevel+"', " +
            "@accountType = '"+accountType+"', " +
            "@currency = '"+currency+"', " +
            "@costs = '"+costs+"', " +
            "@accountSubtype = '"+accountSubtype+"', " +
            "@accountNature = '"+accountNature+"', " +
            "@isAffectable = '"+isAffectable+"', " +
            "@showOnCancellation = '"+showOnCancellation+"', " +
            "@userLoggedIn = '"+userLoggedIn+"', " +
            "@idEnterprise = '"+idEnterprise+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_ACCOUNTING_ACCOUNT: async (_: any, {input}: any) => {
        const { 
            idAccountingAccount,
            userLoggedIn
        } = input;
        try {
            await accountingAccounts.query("exec delete_accountingAccounts " +
            "@idAccountingAccount = '"+idAccountingAccount+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    ENABLE_ACCOUNTING_ACCOUNT: async (_: any, {input}: any) => {
        const { 
            idAccountingAccount,
            userLoggedIn
        } = input;
        try {
            await accountingAccounts.query("exec enable_accountingAccounts " +
            "@idAccountingAccount = '"+idAccountingAccount+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro activado correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    SET_ACCOUNTING_ACCOUNT_CLIENT: async (_: any, {input}: any) => {
        const { 
            idClient,
            userLoggedIn
        } = input;
        try {
            await accountingAccounts.query("exec set_accountingAccountClient " +
            "@idClient = '"+idClient+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return "Cuenta contable asignada correctamente";
        } catch (error) {
            console.log(error);
        }
    },
};

export default accountingAccountsMutations;