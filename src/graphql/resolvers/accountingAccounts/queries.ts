import { accountingAccounts } from "../../../db/Entities/accountingAccounts";

const accountingAccountsQueries = {
    GET_ALL_ACCOUNTINGACCOUNTS: async (_: any, {status,isAffectable, idEnterprise}: any) => {
        try{
            const result = await accountingAccounts.query("exec get_all_accountingAccounts @status = '"+ status +"', @isAffectable = '"+ isAffectable +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default accountingAccountsQueries;