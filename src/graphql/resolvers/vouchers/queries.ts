import { vouchers } from "../../../db/Entities/vouchers";

const vouchersQueries = {
    GET_ALL_VOUCHERS: async (_: any, {origin, date1, date2, status, idEnterprise, accountingAccount1, accountingAccount2}: any) => {
        try{
            const result = await vouchers.query("exec get_all_vouchers @origin = '"+ origin +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"', @accountingAccount1 = '"+ accountingAccount1 +"', @accountingAccount2 = '"+ accountingAccount2 +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_VOUCHER_BY_ID: async (_: any, {idVoucher, idEnterprise}: any) => {
        try{
            const result = await vouchers.query("exec get_all_voucher_by_id @idVoucher = '"+ idVoucher +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_VOUCHER_DETAIL_BY_IDVOUCHER: async (_: any, {idVoucher, idEnterprise}: any) => {
        try{
            const result = await vouchers.query("exec get_all_voucherDetail_by_idVoucher @idVoucher = '"+ idVoucher +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_VOUCHERDOCUMENT: async (_: any, {idVoucher}: any) => {
        try{
            const result = await vouchers.query("exec get_voucherDocument @idVoucher = '"+ idVoucher +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_VOUCHERDOCUMENT_DETAIL: async (_: any, {idVoucher}: any) => {
        try{
            const result = await vouchers.query("exec get_voucherDocumentDetail @idVoucher = '"+ idVoucher +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_VOUCHERS_WHITOUT_ACCOUNTS: async (_: any, {origin, date1, date2, status, idEnterprise}: any) => {
        try{
            const result = await vouchers.query("exec get_all_vouchers_withOut_accounts @origin = '"+ origin +"', @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @status = '"+ status +"', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default vouchersQueries;