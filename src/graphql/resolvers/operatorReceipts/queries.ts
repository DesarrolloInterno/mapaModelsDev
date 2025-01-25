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
    }
};

export default operatorReceiptsQueries;