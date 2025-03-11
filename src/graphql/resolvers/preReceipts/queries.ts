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
    GET_ALL_PRE_RECEIPT_DISCOUNTS: async (_: any, {idPreReceipt, idEnterprise, status, date1, date2}: any) => {
        try{
            const result = await preReceipts.query("exec get_preReceiptDiscounts @idPreReceipt = '"+ idPreReceipt +"', @idEnterprise = '"+ idEnterprise +"', @status = '"+ status +"', @date1 = '"+ date1 + "', @date2 = '"+ date2 + "'");
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
    GET_TRIP_FOR_PRE_RECEIPT_PAYROLL_BY_EMPLOYEE: async (_: any, {idEmployee, idEnterprise, date}: any) => {
        try{
            const result = await preReceipts.query("exec get_tripsForPreReceiptPayrollByEmployee  @idEmployee = '"+ idEmployee +"', @idEnterprise = '"+ idEnterprise +"', @date = '"+ date +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_EXPENSEDEADLINES_BY_PRE_RECEIPT: async (_: any, {date, idPrereceipt, idOperator, idTrips, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_expenseDeadlines_by_prereceipt @date = '"+ date +"', @idPrereceipt = '"+ idPrereceipt +"', @idOperator = '"+ idOperator +"', @idTrips = '"+ idTrips +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_VERIFIED_EXPENSES_BY_PRE_RECEIPT: async (_: any, {date, idPrereceipt, idOperator, idTrips, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_preReceiptVerifiedExpenses_by_prereceipt @date = '"+ date +"', @idPrereceipt = '"+ idPrereceipt +"', @idOperator = '"+ idOperator +"', @idTrips = '"+ idTrips +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIP_ADVANCE_DEADLINES_BY_PRE_RECEIPT: async (_: any, {date, idPrereceipt, idOperator, idTrips, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_tripAdvanceDeadlines_by_prereceipt @date = '"+ date +"', @idPrereceipt = '"+ idPrereceipt +"', @idOperator = '"+ idOperator +"', @idTrips = '"+ idTrips +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_TRIP_ADVANCE_DEADLINES_BY_PRE_RECEIPT2: async (_: any, {date, idOperator, idTrips, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_tripAdvanceDeadlines_by_prereceipt2 @date = '"+ date +"', @idOperator = '"+ idOperator +"', @idTrips = '"+ idTrips +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_DISCOUNT_BY_PRERECEIPT: async (_: any, {date, idPrereceipt, idOperator, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_discounts_by_prereceipt @date = '"+ date +"', @idPrereceipt = '"+ idPrereceipt +"', @idOperator = '"+ idOperator +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_MOVEMENTS_BY_PRERECEIPT: async (_: any, {date, idPrereceipt, idOperator, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_movements_by_prereceipt @date = '"+ date +"', @idPrereceipt = '"+ idPrereceipt +"', @idOperator = '"+ idOperator +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_SUPPLEMENTARY_BY_PRERECEIPT: async (_: any, {date, idPrereceipt, idOperator, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_supplementaryPayroll_by_prereceipt @date = '"+ date +"', @idPrereceipt = '"+ idPrereceipt +"', @idOperator = '"+ idOperator +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_PRE_RECEIPT_BY_ID: async (_: any, {idPreReceipt, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_PreReceipt_by_id @idPreReceipt = '"+ idPreReceipt +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_PRE_RECEIPT_TRIPS: async (_: any, {idPreReceipt, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_preReceipt_trips @idPreReceipt = '"+ idPreReceipt +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_PRE_RECEIPT_LOCAL_MOVEMENTS: async (_: any, {idPreReceipt, idEnterprise, date1, date2}: any) => {
        try{
            const result = await preReceipts.query("exec get_preReceiptLocalMovements @idPreReceipt = '"+ idPreReceipt +"', @idEnterprise = '"+ idEnterprise +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_LOCAL_MOVEMENTS_BY_PRERECEIPT: async (_: any, {date, idPrereceipt, idOperator, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_local_movements_by_prereceipt @date = '"+ date +"', @idPrereceipt = '"+ idPrereceipt +"', @idOperator = '"+ idOperator +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_DISCOUNTDEADLINES_BY_PRE_RECEIPT: async (_: any, {date, idPrereceipt, idOperator, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_discountDeadlines_by_prereceipt @date = '"+ date +"', @idPrereceipt = '"+ idPrereceipt +"', @idOperator = '"+ idOperator +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_DISCOUNT_DEADLINES_BY_DISCOUNT: async (_: any, {idPreReceiptDiscount}: any) => {
        try{
            const result = await preReceipts.query("exec get_all_discountsDeadlines_by_Discount @idPreReceiptDiscount = '"+ idPreReceiptDiscount +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_ACCRUED_SETTLEMENT_RECEIPTS: async (_: any, {typeFilter, date, date1, date2, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_all_accruedSettlementReceipts @typeFilter = '" + typeFilter + "', @date = '" + date + "', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_ACCRUEDSETTLEMENTPRERECEIPTS2: async (_: any, {typeFilter, idWeek, idYear, date1, date2, idEnterprise}: any) => {
        try{
            const result = await preReceipts.query("exec get_all_accruedSettlementPreReceipts2 @typeFilter = '"+ typeFilter +"', @idWeek = '"+ idWeek +"', @idYear = '"+ idYear +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_ACCRUEDSETTLEMENTPRERECEIPTS_SUPPLEMENTARYPAYROLL: async (_: any, {idPreReceipt}: any) => {
        try{
            const result = await preReceipts.query("exec get_all_accruedSettlementPreReceipts_supplementaryPayroll  @idPreReceipt = '"+ idPreReceipt +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_ACCRUEDSETTLEMENTPRERECEIPTS_DISCOUNTS: async (_: any, {idPreReceipt}: any) => {
        try{
            const result = await preReceipts.query("exec get_all_accruedSettlementPreReceipts_discounts  @idPreReceipt = '"+ idPreReceipt +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    }
};

export default preReceiptsQueries;