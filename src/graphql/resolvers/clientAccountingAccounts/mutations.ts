import { clientAccountingAccounts } from "../../../db/Entities/clientAccountingAccounts";

const clientAccountingAccountsMutations = {
    SET_CLIENT_ACCOUNTING_ACCOUNT: async (_: any, {input}: any) => {
        const { 
            idClientAccountingAccount,
            idClient,
            idAccountingAccount,
            nameAccountingAccount,
            accountingAccount,
            idInvoicingConcept,
            nameInvoicingConcept,
            userLoggedIn,
            status,
        } = input;
        try {
            const result = await clientAccountingAccounts.query("exec set_clientAccountingAccount " +
                "@idClientAccountingAccount = '"+ idClientAccountingAccount +"', " +
                "@idClient = '"+ idClient +"', " +
                "@idAccountingAccount = '"+ idAccountingAccount +"', " +
                "@nameAccountingAccount = '"+ nameAccountingAccount +"', " +
                "@accountingAccount = '"+ accountingAccount +"', " +
                "@idInvoicingConcept = '"+idInvoicingConcept+"', " +
                "@nameInvoicingConcept = '"+ nameInvoicingConcept +"', " +
                "@userLoggedIn = '"+ userLoggedIn +"', " +
                "@status = '"+ status +"'"
            );

            return result
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_CLIENT_ACCOUNTING_ACCOUNT: async (_: any, {input}: any) => {
        const { 
            idClientAccountingAccount,
            userLoggedIn
        } = input;
        try {
            await clientAccountingAccounts.query("exec delete_clientAccountingAccount " +
            "@idClientAccountingAccount = '"+ idClientAccountingAccount +"', " +
            "@userLoggedIn = '"+ userLoggedIn +"' " );

            return "Cuenta eliminada correctamente";
        } catch (error) {
            console.log(error);
        }
    },
};

export default clientAccountingAccountsMutations;