import { trialBalances } from "../../../db/Entities/trialBalances";

const trialBalancesMutations = {
    CREATE_TRIAL_BALANCE_EXCEL: async (_: any, {input}: any) => {
        const { 
            accountingAccount,
            nameAccountingAccount,
            beginningBalance,
            charges,
            payments,
            endingBalance,
            trialBalanceMonth,
            trialBalanceYear,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            const newid = await trialBalances.query("exec create_trialBalance_excel " +
                "@accountingAccount = '"+ accountingAccount + "', " +
                "@nameAccountingAccount = '"+ nameAccountingAccount + "', " +
                "@beginningBalance = '"+ beginningBalance + "', " +
                "@charges = '"+ charges + "', " +
                "@payments = '"+ payments + "', " +
                "@endingBalance = '"+ endingBalance + "', " +
                "@trialBalanceMonth = '"+ trialBalanceMonth + "', " +
                "@trialBalanceYear = '"+ trialBalanceYear + "', " +
                "@userLoggedIn = '"+ userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise +
                "'"
            );
            
            return newid;
        } catch (error) {
            console.log(error);
        }
    }
};

export default trialBalancesMutations;