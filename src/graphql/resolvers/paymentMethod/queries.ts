import { paymentMethod } from "../../../db/Entities/paymentMethod";

const paymentMethodQueries = {

    GET_ALL_PAYMENT_METHOD: async (_: any, {}: any) => {
        try{
            const result = await paymentMethod.query("exec get_all_paymentMethod ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },

};

export default paymentMethodQueries;