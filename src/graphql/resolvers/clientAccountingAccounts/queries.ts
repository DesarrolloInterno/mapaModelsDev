import { clientAccountingAccounts } from "../../../db/Entities/clientAccountingAccounts";

const clientAccountingAccountsQueries = {
    GET_CLIENT_ACCOUNTING_ACCOUNTS_BY_IDCLIENT: async (_: any, {idClient}: any) => {
        try{
            const result = await clientAccountingAccounts.query("exec get_clientAccountingAccount_by_idClient @idClient = '"+ idClient +"'");
            return result;

        } catch (error) {
            console.log(error);
        }

    }
};

export default clientAccountingAccountsQueries;