import { invoices } from "../../../db/Entities/invoices";

const invoicesQueries = {
    GET_INVOICES_BY_TOKEN: async (_: any, {token}: any) => {
        try{
            const encrypt = process.env.ENCRYPT;
            const result = await invoices.query("exec get_invoice_by_token @token = '"+ token +"', @encrypt = '"+encrypt+"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INVOICEAMOUNTS: async (_: any, {idInvoice}: any) => {
        try{
            const result = await invoices.query("exec get_invoices_amounts @idInvoice = '"+ idInvoice +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_INVOICES_FOR_COLLECTION: async (_: any, {date1, date2, typeFilter}: any) => {
        try{
            const result = await invoices.query("exec get_all_invoicesForCollection @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @typeFilter= '"+ typeFilter +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INVOICE_BY_ID_INVOICE: async (_: any, {idInvoice}: any) => {
        try{
            const result = await invoices.query("exec get_invoice_by_idInvoice @idInvoice = '"+ idInvoice +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default invoicesQueries;