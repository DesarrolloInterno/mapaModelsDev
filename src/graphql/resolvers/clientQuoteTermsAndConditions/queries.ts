import { clientQuoteTermsAndConditions } from "../../../db/Entities/clientQuoteTermsAndConditions";

const clientQuoteTermsAndConditionsQueries = {
    GET_GENERAL_TERMS_AND_CONDITIONS: async (_: any, {}: any) => {
        try{
            const result = await clientQuoteTermsAndConditions.query("exec get_generalTermsAndConditions ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_CLIENT_QUOTE_TERMS_AND_CONDITIONS_BY_ID: async (_: any, {idClientQuote}: any) => {
        try{
            const result = await clientQuoteTermsAndConditions.query("exec get_clientQuoteTermsAndConditions @idClientQuote = '"+ idClientQuote +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    }
};

export default clientQuoteTermsAndConditionsQueries;