import { accountingVouchers } from "../../../db/Entities/accountingVouchers";

const accountingVouchersMutations = {
    CREATE_ACCOUNTING_VOUCHER: async (_: any, {input}: any) => {
        const { 
            name,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            const newRecord = await accountingVouchers.query("exec create_accountingVoucher " +
                "@name = '"+name+"', " +
                "@userLoggedIn = '"+userLoggedIn+"', " +
                "@idEnterprise = '"+idEnterprise+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_ACCOUNTING_VOUCHER: async (_: any, {input}: any) => {
        const { 
            idAccountingVoucher,
            name,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            const newRecord = await accountingVouchers.query("exec update_accountingVoucher " +
                "@idAccountingVoucher = '"+idAccountingVoucher+"', " +
                "@name = '"+name+"', " +
                "@userLoggedIn = '"+userLoggedIn+"', " +
                "@idEnterprise = '"+idEnterprise+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_ACCOUNTING_VOUCHER: async (_: any, {input}: any) => {
        const { 
            idAccountingVoucher,
            userLoggedIn
        } = input;
        try {
            await accountingVouchers.query("exec delete_accountingVoucher " +
            "@idAccountingVoucher = '"+idAccountingVoucher+"', " +
            "@userLoggedIn = '"+userLoggedIn+"' ");
            return "Registro eliminado correctamente";
        } catch (error) {
            console.log(error);
        }
    }
};

export default accountingVouchersMutations;