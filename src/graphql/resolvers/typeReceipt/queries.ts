import { typeReceipt } from "../../../db/Entities/typeReceipt";

const typeReceiptQueries = {
    GET_ALL_TYPE_RECEIPT: async (_: any, {status}: any) => {
        try{
            const result = await typeReceipt.query("exec get_all_typeReceipt @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    }
};

export default typeReceiptQueries;