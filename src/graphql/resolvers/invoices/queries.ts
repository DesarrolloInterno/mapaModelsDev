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
};

export default invoicesQueries;