import { preReceipts } from "../../../db/Entities/preReceipts";

const preReceiptsQueries = {

    GET_ALL_PRE_RECEIPTS: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_all_preReceipts @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_PRE_RECEIPT_SUPPLEMENTARY_PAYROLL_CONCEPTS: async (_: any, {idPreReceipt, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_preReceiptSupplementaryPayrollConcepts @idPreReceipt = '"+ idPreReceipt +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_PRE_RECEIPT_MOVEMENTS: async (_: any, {idPreReceipt, idEnterprise, date1, date2}: any) => {
        try{
            const result = await preReceipts.query("exec get_preReceiptMovements @idPreReceipt = '"+ idPreReceipt +"', @idEnterprise = '"+ idEnterprise +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_PRE_RECEIPT_DISCOUNTS: async (_: any, {idPreReceipt, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_preReceiptDiscounts @idPreReceipt = '"+ idPreReceipt +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_PRE_RECEIPT_VERIFIED_EXPENSES: async (_: any, {idPreReceipt, idEnterprise, status, date1, date2}: any) => {
        try{
            const result = await preReceipts.query("exec get_preReceiptVerifiedExpenses @idPreReceipt = '"+ idPreReceipt +"', @idEnterprise = '"+ idEnterprise +"', @status = '"+ status +"', @date1 = '"+ date1 + "', @date2 = '"+ date2 + "'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_EXPENSES_DEADLINES_BY_VERIFIED_EXPENSE: async (_: any, {idPreReceiptVerifiedExpense}: any) => {
        try{
            const result = await preReceipts.query("exec get_all_expensesDeadlines_by_verifiedExpense @idPreReceiptVerifiedExpense = '"+ idPreReceiptVerifiedExpense +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_EXPENSES_DEADLINES: async (_: any, {status, date1, date2, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_all_expensesDeadlines @status = '"+ status +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIP_FOR_PRE_RECEIPT_PAYROLL_BY_EMPLOYEE: async (_: any, {idEmployee, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_tripsForPreReceiptPayrollByEmployee @idEmployee = '"+ idEmployee +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default preReceiptsQueries;