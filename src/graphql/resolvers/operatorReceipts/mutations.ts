import { operatorReceipts } from "../../../db/Entities/operatorReceipts";

const operatorReceiptsMutations = {
    DELETE_OPERATOR_RECEIPT: async (_: any, {input}: any) => {
        const {
            idOperatorReceipt,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            await operatorReceipts.query("exec delete_operatorReceipt " +
                "@idOperatorReceipt = '" + idOperatorReceipt + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_FIXEDPAYROLL_OPERATOR_RECEIPT: async (_: any, {input}: any) => {
        const {
            idOperatorReceipt,
            fixedPayroll,
            userLoggedIn,
        } = input;

        try {
            await operatorReceipts.query("exec update_fixedPayroll_operatorReceipts " +
                "@idOperatorReceipt = '" + idOperatorReceipt + "', " +
                "@fixedPayroll = '" + fixedPayroll + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }
    }
}

export default operatorReceiptsMutations;