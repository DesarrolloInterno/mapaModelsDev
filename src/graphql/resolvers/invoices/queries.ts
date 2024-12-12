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
    GET_ALL_INVOICES_FOR_COLLECTION: async (_: any, {date1, date2, typeFilter, idEnterprise}: any) => {
        try{
            const result = await invoices.query("exec get_all_invoicesForCollection @date1 = '"+ date1 +"', @date2 = '"+ date2 +"', @typeFilter= '"+ typeFilter +"', @idEnterprise = '"+ idEnterprise +"'");
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
    },
    GET_ALL_INVOICES_FOR_COLLECTION_FORECAST: async (_: any, {date1, currency, idEnterprise, filterStatusType}: any) => {
        try{
            const result = await invoices.query("exec get_all_invoices_for_collectionForecast @date1 = '"+ date1 +"', @currency = '"+ currency + "', @idEnterprise = '"+ idEnterprise +"', @filterStatusType = '"+ filterStatusType +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_SUMMARY_INVOICES_FOR_COLLECTION_FORECAST: async (_: any, {date1, currency, idEnterprise}: any) => {
        try{
            const result = await invoices.query("exec get_all_summaryInvoices_for_collectionForecast @date1 = '"+ date1 +"', @currency = '"+ currency + "', @idEnterprise = '"+ idEnterprise +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_INVOICES_FOR_ANALYSIS: async (_: any, {date1, date2, dateTypeFilter, idEnterprise, currency}: any) => {
        try{
            const result = await invoices.query("exec get_all_invoices_for_analysis @date1 = '"+ date1 +"', @date2 = '"+ date2 + "', @dateTypeFilter = '"+ dateTypeFilter +"', @idEnterprise = '"+ idEnterprise +"', @currency = '"+ currency +"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_INVOICES_DOCUMENTS: async (_: any, {idInvoice}: any) => {
        try{
            const result = await invoices.query("exec get_invoicesDocuments @idInvoice = '"+ idInvoice +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_INVOICES_DOCUMENTS_BY_ID: async (_: any, {idInvoiceDocument}: any) => {
        try{
            const result = await invoices.query("exec get_invoicesDocuments_by_id @idInvoiceDocument = '"+ idInvoiceDocument +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_INVOICES: async (_: any, {
        typeStatus,
        date1,
        date2,
        date,
        idEnterprise
    }: any) => {
        try{
            const result = await invoices.query("exec get_all_invoices " +
            "@typeStatus = '"+ typeStatus +"'," +
            "@date1 = '"+ date1 +"', " +
            "@date2 = '"+ date2 +"', " +
            "@date = '"+ date +"', " +
            "@idEnterprise = '"+ idEnterprise +"' ");
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
        idInvoice, idEnterprise
    }: any) => {
        try{
            const result = await invoices.query("exec get_invoices_by_id @idInvoice = '"+ idInvoice +"', @idEnterprise = '"+ idEnterprise +"' ");
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
    GET_ASSET_INVOICEAMOUNTS_BY_ID: async (_: any, {
        idInvoice
    }: any) => {
        try{
            const result = await invoices.query("exec get_asset_invoiceAmounts_by_id @idInvoice = '"+ idInvoice +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_ALL_ASSET_INVOICES: async (_: any, {
        typeStatus,
        date1,
        date2,
        date
    }: any) => {
        try{
            const result = await invoices.query("exec get_all_assetInvoices " +
            "@typeStatus = '"+ typeStatus +"'," +
            "@date1 = '"+ date1 +"', " +
            "@date2 = '"+ date2 +"', " +
            "@date = '"+ date +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default invoicesQueries;