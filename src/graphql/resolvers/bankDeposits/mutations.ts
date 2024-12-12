import { bankDeposits } from "../../../db/Entities/bankDeposits";

const bankDepositsMutations = {
    CREATE_BANKDEPOSIT: async (_: any, {input}: any) => {
        const {
            idClient,
            idBankAccount,
            exchangeRate,
            amount,
            reference,
            bankDepositDate,
            bankDepositControlDate,
            observations,
            depositType,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newid = await bankDeposits.query("exec create_bankDeposits " +
                "@idClient = '" + idClient + "', " +
                "@idBankAccount = '" + idBankAccount + "', " +
                "@exchangeRate = '" + exchangeRate + "', " +
                "@amount = '" + amount + "', " +
                "@reference = '" + reference + "', " +
                "@bankDepositDate = '" + bankDepositDate + "', " +
                "@bankDepositControlDate = '" + bankDepositControlDate + "', " +
                "@observations = '" + observations + "', " +
                "@depositType = '" + depositType + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },
};

export default bankDepositsMutations;