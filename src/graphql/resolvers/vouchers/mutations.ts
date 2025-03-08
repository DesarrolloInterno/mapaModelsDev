import { vouchers } from "../../../db/Entities/vouchers";

const vouchersMutations = {
    CREATE_VOUCHER: async (_: any, {input}: any) => {
        const { 
            name,
            userLoggedIn,
            idEnterprise
        } = input;
        try {
            const newRecord = await vouchers.query("exec create_voucher " +
                "@name = '"+name+"', " +
                "@userLoggedIn = '"+userLoggedIn+"', " +
                "@idEnterprise = '"+idEnterprise+"'");
            return newRecord;
        } catch (error) {
            console.log(error);
        }
    }
};

export default vouchersMutations;