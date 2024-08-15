import { invoices } from "../../../db/Entities/invoices";

const invoicesMutations = {
    CREATE_INVOICE_FROM_TRIP: async (_: any, {input}: any) => {
        const {
            idTrip,
            userLoggedIn,
            exchangeRate
        } = input;

        try {
            const newid = await invoices.query("exec create_invoice_from_trip " +
                "@idTrip = '" + idTrip + "', " +
                "@userLoggedIn = '" + userLoggedIn + "', " +
                "@exchangeRate = '" + exchangeRate + "' "
            );
            return newid;
        } catch (error) {
            console.log(error);
        }

    },

};

export default invoicesMutations;