import { vouchers } from "../../../db/Entities/vouchers";

const vouchersQueries = {
    GET_ALL_VOUCHERS: async (_: any, {origin, date1, date2, status, idEnterprise}: any) => {
        try{
            const result = await vouchers.query("exec get_all_vouchers @origin = '"+ origin +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default vouchersQueries;