import { taxes } from "../../../db/Entities/taxes";

const taxesQueries = {
    GET_TAXES: async (_: any, {status}: any) => {
        try{
            const result = await taxes.query("exec get_all_taxes @status = '"+ status +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
    GET_TAXRATE_INVOICINGCONCEPT: async (_: any, {}: any) => {
        try{
            const result = await taxes.query("exec get_taxRate_invoicingConcept ");
            return result;

        } catch (error) {
            console.log(error);
        }
    },
};

export default taxesQueries;