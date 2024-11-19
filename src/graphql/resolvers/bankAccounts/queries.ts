import { bankAccounts } from "../../../db/Entities/bankAccounts";

const bankAccountsQueries = {
    GET_ALL_BANK_ACCOUNTS: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await bankAccounts.query("exec get_all_bankAccounts @status ='"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default bankAccountsQueries;