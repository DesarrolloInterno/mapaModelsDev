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
    GET_ALL_INVOICES: async (_: any, {
        typeStatus,
        date1,
        date2,
        date
    }: any) => {
        try{
            const result = await invoices.query("exec get_all_invoices " +
            "@typeStatus = '"+ typeStatus +"'," +
            "@date1 = '"+ date1 +"', " +
            "@date2 = '"+ date2 +"', " +
            "@date = '"+ date +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_INVOICES_BY_CLIENT: async (_: any, {
        typeStatus,
        date1,
        date2,
        date
    }: any) => {
        try{
            const result = await invoices.query("exec get_all_invoices_by_client " +
            "@typeStatus = '"+ typeStatus +"'," +
            "@date1 = '"+ date1 +"', " +
            "@date2 = '"+ date2 +"', " +
            "@date = '"+ date +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INVOICE_BY_ID: async (_: any, {
        idInvoice
    }: any) => {
        try{
            const result = await invoices.query("exec get_invoices_by_id @idInvoice = '"+ idInvoice +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INVOICEAMOUNTS_BY_ID: async (_: any, {
        idInvoice
    }: any) => {
        try{
            const result = await invoices.query("exec get_invoiceAmounts_by_id @idInvoice = '"+ idInvoice +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INVOICEDOCUMENT: async (_: any, {idInvoice}: any) => {
        try{
            const result = await invoices.query("exec get_invoiceDocument @idInvoice = '"+ idInvoice +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default invoicesQueries;