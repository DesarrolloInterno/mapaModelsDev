import { clientQuote } from "../../../db/Entities/clientQuote";

const clientQuoteQueries = {
    GET_ALL_CLIENT_QUOTE: async (_: any, {status, date1, date2, idEnterprise}: any) => {
        try{
            const result = await clientQuote.query("exec get_all_clientQuote @status = '"+ status +"', @date1 = '"+date1+"', @date2 = '"+date2+"', @idEnterprise = '"+idEnterprise+"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENT_QUOTE_BY_ID: async (_: any, {idClientQuote, idEnterprise}: any) => {
        try{
            const result = await clientQuote.query("exec get_clientQuote_by_id @idClientQuote = '"+ idClientQuote +"', @idEnterprise = '"+idEnterprise+"'");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENT_QUOTE_BY_ID_PDF: async (_: any, {idClientQuote}: any) => {
        try{
            const result = await clientQuote.query("exec get_clientQuote_by_id_pdf @idClientQuote = '"+ idClientQuote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENT_QUOTE_DETAIL_BY_ID: async (_: any, {idClientQuote}: any) => {
        try{
            const result = await clientQuote.query("exec get_clientQuoteDetail_by_id @idClientQuote = '"+ idClientQuote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENT_QUOTE_LOGOS: async (_: any, {idClientQuote}: any) => {
        try{
            const result = await clientQuote.query("exec get_clientQuoteLogos @idClientQuote = '"+ idClientQuote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default clientQuoteQueries;