import { operatorReceipts } from "../../../db/Entities/operatorReceipts";

const operatorReceiptsQueries = {
    GET_ALL_OPERATOR_RECEIPTS: async (_: any, {idEnterprise, date1, date2}: any) => {
        try{
            const result = await operatorReceipts.query("exec get_all_operatorReceipts @idEnterprise ='"+ idEnterprise +"', @date1 ='"+ date1 +"', @date2 ='"+ date2 +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_OPERATOR_RECEIPT_BY_ID: async (_: any, {idOperatorReceipt}: any) => {
        try{
            const result = await operatorReceipts.query("exec get_operator_receipt_by_id @idOperatorReceipt ='"+ idOperatorReceipt +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_OPERATORRECEIPT_TRIPS: async (_: any, {idOperatorReceipt, idEnterprise}: any) => {
        try{
            const result = await operatorReceipts.query("exec get_operatorReceipt_trips @idOperatorReceipt = '"+ idOperatorReceipt +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_EXPENSEDEADLINES_BY_OPERATORRECEIPT: async (_: any, {idOperatorReceipt, idEnterprise}: any) => {
        try{
            const result = await operatorReceipts.query("exec get_expenseDeadlines_by_operatorReceipt @idOperatorReceipt = '"+ idOperatorReceipt +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_DISCOUNT_BY_OPERATORRECEIPT: async (_: any, {idOperatorReceipt, idEnterprise}: any) => {
        try{
            const result = await operatorReceipts.query("exec get_discounts_by_operatorReceipt @idOperatorReceipt = '"+ idOperatorReceipt +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_MOVEMENTS_BY_OPERATORRECEIPT: async (_: any, {idOperatorReceipt, idEnterprise}: any) => {
        try{
            const result = await operatorReceipts.query("exec get_movements_by_operatorReceipt @idOperatorReceipt = '"+ idOperatorReceipt +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    GET_SUPPLEMENTARY_BY_OPERATORRECEIPT: async (_: any, {idOperatorReceipt, idEnterprise}: any) => {
        try{
            const result = await operatorReceipts.query("exec get_supplementaryPayroll_by_operatorReceipt @idOperatorReceipt = '"+ idOperatorReceipt +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;
        } catch (error) {
            console.log(error);
        }
    },
};

export default operatorReceiptsQueries;