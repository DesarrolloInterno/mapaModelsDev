import { typeReceipt } from "../../../db/Entities/typeReceipt";

const typeReceiptQueries = {
    GET_ALL_TYPE_RECEIPT: async (_: any, {status, idEnterprise}: any) => {
        try{
            const result = await typeReceipt.query("exec get_all_typeReceipt @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }

    }
};

export default typeReceiptQueries;