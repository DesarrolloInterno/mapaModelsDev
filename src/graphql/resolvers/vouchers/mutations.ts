import { vouchers } from "../../../db/Entities/vouchers";

const vouchersMutations = {
    CREATE_VOUCHER: async (_: any, {input}: any) => {
        const { 
            idBeneficiary,
            beneficiaryType,
            voucherDate,
            voucherType,
            idOrigin,
            origin,
            description,
            userLoggedIn,
            idEnterprise,
            beneficiaryName
        } = input;
        try {
            const newRecord = await vouchers.query("exec create_voucher " +
                "@idBeneficiary = '"+idBeneficiary+"', " +
                "@beneficiaryType = '"+beneficiaryType+"', " +
                "@voucherDate = '"+voucherDate+"', " +
                "@voucherType = '"+voucherType+"', " +
                "@idOrigin = '"+idOrigin+"', " +
                "@origin = '"+origin+"', " +
                "@description = '"+description+"', " +
                "@userLoggedIn = '"+userLoggedIn+"', " +
                "@idEnterprise = '"+idEnterprise+"', " +
                "@beneficiaryName = '"+beneficiaryName+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_VOUCHER: async (_: any, {input}: any) => {
        const { 
            idVoucher,
            idBeneficiary,
            beneficiaryType,
            voucherDate,
            voucherType,
            idOrigin,
            origin,
            description,
            userLoggedIn,
            idEnterprise,
            beneficiaryName
        } = input;
        try {
            const newRecord = await vouchers.query("exec update_voucher " +
                "@idVoucher = '"+idVoucher+"', " +
                "@idBeneficiary = '"+idBeneficiary+"', " +
                "@beneficiaryType = '"+beneficiaryType+"', " +
                "@voucherDate = '"+voucherDate+"', " +
                "@voucherType = '"+voucherType+"', " +
                "@idOrigin = '"+idOrigin+"', " +
                "@origin = '"+origin+"', " +
                "@description = '"+description+"', " +
                "@userLoggedIn = '"+userLoggedIn+"', " +
                "@idEnterprise = '"+idEnterprise+"', " +
                "@beneficiaryName = '"+beneficiaryName+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    DELETE_VOUCHER: async (_: any, {input}: any) => {
        const { 
            idVoucher,
            userLoggedIn
        } = input;
        try {
            await vouchers.query("exec delete_voucher " +
                "@idVoucher = '"+idVoucher+"', " +
                "@userLoggedIn = '"+userLoggedIn+"'"
            );
            return "Póliza eliminada correctamente";
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE_VOUCHER_DETAIL: async (_: any, {input}: any) => {
        const { 
            idVoucherDetail,
            idVoucher,
            idAccountingAccount,
            accountingAccount,
            accountingAccountName,
            reference,
            description,
            charges,
            payments,
            idEnterprise,
            userLoggedIn,
            status
        } = input;
        try {
            const newRecord = await vouchers.query("exec update_voucherDetail " +
                "@idVoucherDetail = '"+idVoucherDetail+"', " +
                "@idVoucher = '"+idVoucher+"', " +
                "@idAccountingAccount = '"+idAccountingAccount+"', " +
                "@accountingAccount = '"+accountingAccount+"', " +
                "@accountingAccountName = '"+accountingAccountName+"', " +
                "@reference = '"+reference+"', " +
                "@description = '"+description+"', " +
                "@charges = '"+charges+"', " +
                "@payments = '"+payments+"', " +
                "@idEnterprise = '"+idEnterprise+"', " +
                "@status = '"+status+"', " +
                "@userLoggedIn = '"+userLoggedIn+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    },
    SET_TO_RECORD_VOUCHER: async (_: any, {input}: any) => {
        const { 
            idVoucher,
            userLoggedIn
        } = input;
        try {
            await vouchers.query("exec set_toRecord_voucher " +
                "@idVoucher = '"+idVoucher+"', " +
                "@userLoggedIn = '"+userLoggedIn+"'");
            return 'Póliza contabilizada correctamente';
        } catch (error) {
            console.log(error);
        }
    },
    SET_OPEN_VOUCHER: async (_: any, {input}: any) => {
        const { 
            idVoucher,
            userLoggedIn
        } = input;
        try {
            await vouchers.query("exec set_open_voucher " +
                "@idVoucher = '"+idVoucher+"', " +
                "@userLoggedIn = '"+userLoggedIn+"'");
            return 'Póliza abierta correctamente';
        } catch (error) {
            console.log(error);
        }
    }
};

export default vouchersMutations;