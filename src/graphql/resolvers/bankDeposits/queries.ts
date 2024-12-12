import { bankDeposits } from "../../../db/Entities/bankDeposits";

const bankDepositsQueries = {
    GET_ALL_BANK_DEPOSITS: async (_: any, {date1, date2, idEnterprise}: any) => {
        try{
            const result = await bankDeposits.query("exec get_all_bankDeposits @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = "+ idEnterprise);
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_BANK_DEPOSIT_BY_ID: async (_: any, {idBankDeposit, idEnterprise}: any) => {
        try{
            const result = await bankDeposits.query("exec get_bankDeposit_by_id @idBankDeposit = "+ idBankDeposit +", @idEnterprise = "+ idEnterprise);
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INVOICES_BANK_DEPOSITS_BY_IDINVOICE: async (_: any, {idBankDeposit, idEnterprise}: any) => {
        try{
            const result = await bankDeposits.query("exec get_invoices_bankDeposits_by_idBankDeposit @idBankDeposit = "+ idBankDeposit +", @idEnterprise = "+ idEnterprise);
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_UNPAID_INVOICES_BY_CLIENT: async (_: any, {idClient, idEnterprise}: any) => {
        try{
            const result = await bankDeposits.query("exec get_UnpaidInvoices_by_client @idClient = "+ idClient +", @idEnterprise = "+ idEnterprise);
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default bankDepositsQueries;