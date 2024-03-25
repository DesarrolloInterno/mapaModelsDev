import { paymentType } from "../../../db/Entities/paymentType";

const paymentTypeQueries = {

    GET_ALL_PAYMENT_TYPE: async (_: any, {}: any) => {
        try{
            const result = await paymentType.query("exec get_all_paymentType ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },

};

export default paymentTypeQueries;