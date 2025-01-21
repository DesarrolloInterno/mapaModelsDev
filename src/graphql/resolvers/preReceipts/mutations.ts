import { preReceipts } from "../../../db/Entities/preReceipts";

const preReceiptsMutations = {

    CREATE_PRE_RECEIPT_SUPPLEMENTARY_PAROLL_CONCEPT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            idSupplementaryPayrollConcept,
            supplementaryPayrollConcept,
            dateSupplementaryPayrollConcept,
            idOperator,
            operator,
            idUnit,
            unit,
            licensePlates,
            rate,
            comments,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptSupplementaryPayrollConcept " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@idSupplementaryPayrollConcept = '" + idSupplementaryPayrollConcept + "', " +
                "@supplementaryPayrollConcept = '" + supplementaryPayrollConcept + "', " +
                "@dateSupplementaryPayrollConcept = '" + dateSupplementaryPayrollConcept + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@unit = '" + unit + "', " +
                "@licensePlates = '" + licensePlates + "', " +
                "@rate = '" + rate + "', " +
                "@comments = '" + comments + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_PRE_RECEIPT_MOVEMENT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            quantity,
            amount,
            dateMovement,
            description,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptMovement " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@quantity = '" + quantity + "', " +
                "@amount = '" + amount + "', " +
                "@dateMovement = '" + dateMovement + "', " +
                "@description = '" + description + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_PRE_RECEIPT_DISCOUNT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            name,
            amount,
            userLoggedIn,
            idEnterprise
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptDiscount " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@name = '" + name + "', " +
                "@amount = '" + amount + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    CREATE_PRE_RECEIPT_VERIFIED_EXPENSES: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            idTrip,
            numTrip,
            idUnit,
            unit,
            idTruckBox,
            truckBox,
            idOperator,
            operator,
            idPayrollExpenseConcept,
            payrollExpenseConcept,
            amount,
            dateVerifiedExpense,
            comments,
            userLoggedIn,
            idEnterprise,
            isDeadlines,
	        quantityDeadlines
        } = input;

        try {
            const newRecord = await preReceipts.query("exec create_preReceiptVerifiedExpense " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@numTrip = '" + numTrip + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@unit = '" + unit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@truckBox = '" + truckBox + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "', " +
                "@idPayrollExpenseConcept = '" + idPayrollExpenseConcept + "', " +
                "@payrollExpenseConcept = '" + payrollExpenseConcept + "', " +
                "@amount = '" + amount + "', " +
                "@dateVerifiedExpense = '" + dateVerifiedExpense + "', " +
                "@comments = '" + comments + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@isDeadlines = '" + isDeadlines + "', " +
                "@quantityDeadlines = '" + quantityDeadlines + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_PRE_RECEIPT: async (_: any, {input}: any) => {
        const {
            idPreReceipt,
            userLoggedIn
        } = input;

        try {
            await preReceipts.query("exec delete_preReceipt " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return "Registro eliminado correctamente"
        } catch (error) {
            console.log(error);
        }

    },
    UPDATE_EXPENSE_DEADLINE: async (_: any, {input}: any) => {
        const {
            idExpenseDeadline,
            dateDeadline,
            amount,
            idPayrollExpenseConcept,
            payrollExpenseConcept,
            userLoggedIn,
        } = input;

        try {
            const newRecord = await preReceipts.query("exec update_expenseDeadline " +
                "@idExpenseDeadline = '" + idExpenseDeadline + "', " +
                "@dateDeadline = '" + dateDeadline + "', " +
                "@amount = '" + amount + "', " +
                "@idPayrollExpenseConcept = '" + idPayrollExpenseConcept + "', " +
                "@payrollExpenseConcept = '" + payrollExpenseConcept + "', " +
                "@userLoggedIn = '" + userLoggedIn + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_PRE_RECEIPT_VERIFIED_EXPENSES: async (_: any, {input}: any) => {
        const {
            idPreReceiptVerifiedExpense,
            idPreReceipt,
            idTrip,
            numTrip,
            idUnit,
            unit,
            idTruckBox,
            truckBox,
            idOperator,
            operator,
            idPayrollExpenseConcept,
            payrollExpenseConcept,
            amount,
            dateVerifiedExpense,
            comments,
            userLoggedIn,
            idEnterprise,
            isDeadlines,
	        quantityDeadlines
        } = input;

        try {
            const newRecord = await preReceipts.query("exec update_preReceiptVerifiedExpense " +
                "@idPreReceiptVerifiedExpense = '" + idPreReceiptVerifiedExpense + "', " +
                "@idPreReceipt = '" + idPreReceipt + "', " +
                "@idTrip = '" + idTrip + "', " +
                "@numTrip = '" + numTrip + "', " +
                "@idUnit = '" + idUnit + "', " +
                "@unit = '" + unit + "', " +
                "@idTruckBox = '" + idTruckBox + "', " +
                "@truckBox = '" + truckBox + "', " +
                "@idOperator = '" + idOperator + "', " +
                "@operator = '" + operator + "', " +
                "@idPayrollExpenseConcept = '" + idPayrollExpenseConcept + "', " +
                "@payrollExpenseConcept = '" + payrollExpenseConcept + "', " +
                "@amount = '" + amount + "', " +
                "@dateVerifiedExpense = '" + dateVerifiedExpense + "', " +
                "@comments = '" + comments + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@idEnterprise = '" + idEnterprise + "', " +
                "@isDeadlines = '" + isDeadlines + "', " +
                "@quantityDeadlines = '" + quantityDeadlines + "' "
            );
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default preReceiptsMutations;