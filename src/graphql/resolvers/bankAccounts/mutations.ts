import { bankAccounts } from "../../../db/Entities/bankAccounts";

const bankAccountsMutations = {
    CREATE_BANK_ACCOUNT: async (_: any, {input}: any) => {
        const { 
            nickName,
            idBank,
			bank,
			accountType,
			account,
			codeAccount,
			accountingAccount1,
			accountingAccount2,
			accountingAccount3,
			complementaryAccount,
			bankTransferAccount,
			complementaryTransferAccount,
			accountManager,
			pettyCash,
			pettyCashReimbursementAccount,
			currency,
			idEnterprise,
			userLoggedIn
        } = input;
        try {
            const newRecord = await bankAccounts.query("exec create_bankAccount " +
            "@nickName = '"+nickName+"', " +
            "@idBank = '"+idBank+"', " +
            "@bank = '"+bank+"', " +
            "@accountType = '"+accountType+"', " +
            "@account = '"+account+"', " +
            "@codeAccount = '"+codeAccount+"', " +
            "@accountingAccount1 = '"+accountingAccount1+"', " +
            "@accountingAccount2 = '"+accountingAccount2+"', " +
            "@accountingAccount3 = '"+accountingAccount3+"', " +
            "@complementaryAccount = '"+complementaryAccount+"', " +
            "@bankTransferAccount = '"+bankTransferAccount+"', " +
            "@complementaryTransferAccount = '"+complementaryTransferAccount+"', " +
            "@accountManager = '"+accountManager+"', " +
            "@pettyCash = '"+pettyCash+"', " +
            "@pettyCashReimbursementAccount = '"+pettyCashReimbursementAccount+"', " +
            "@currency = '"+currency+"', " +
            "@idEnterprise = '"+idEnterprise+"', " + 
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_BANK_ACCOUNT: async (_: any, {input}: any) => {
        const {
            idBankAccount, 
            nickName,
            idBank,
			bank,
			accountType,
			account,
			codeAccount,
			accountingAccount1,
			accountingAccount2,
			accountingAccount3,
			complementaryAccount,
			bankTransferAccount,
			complementaryTransferAccount,
			accountManager,
			pettyCash,
			pettyCashReimbursementAccount,
			currency,
			idEnterprise,
			userLoggedIn
        } = input;
        try {
            const newRecord = await bankAccounts.query("exec update_bankAccount " +
            "@idBankAccount = '"+idBankAccount+"', " +
            "@nickName = '"+nickName+"', " +
            "@idBank = '"+idBank+"', " +
            "@bank = '"+bank+"', " +
            "@accountType = '"+accountType+"', " +
            "@account = '"+account+"', " +
            "@codeAccount = '"+codeAccount+"', " +
            "@accountingAccount1 = '"+accountingAccount1+"', " +
            "@accountingAccount2 = '"+accountingAccount2+"', " +
            "@accountingAccount3 = '"+accountingAccount3+"', " +
            "@complementaryAccount = '"+complementaryAccount+"', " +
            "@bankTransferAccount = '"+bankTransferAccount+"', " +
            "@complementaryTransferAccount = '"+complementaryTransferAccount+"', " +
            "@accountManager = '"+accountManager+"', " +
            "@pettyCash = '"+pettyCash+"', " +
            "@pettyCashReimbursementAccount = '"+pettyCashReimbursementAccount+"', " +
            "@currency = '"+currency+"', " +
            "@idEnterprise = '"+idEnterprise+"', " + 
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_BANK_ACCOUNT: async (_: any, {input}: any) => {
        const {
            idBankAccount,
			userLoggedIn
        } = input;
        try {
            await bankAccounts.query("exec delete_bankAccount " +
            "@idBankAccount = '"+idBankAccount+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return 'Registro eliminado correctamente';
        } catch (error) {
            console.log(error);
        }
    }
};

export default bankAccountsMutations;