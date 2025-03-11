import { accountingVouchers } from "../../../db/Entities/accountingVouchers";

const accountingVouchersQueries = {
    GET_ALL_ACCOUNTING_VOUCHERS: async (_: any, {idEnterprise}: any) => {
        try{
            const result = await accountingVouchers.query("exec get_all_accountingVouchers @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default accountingVouchersQueries;